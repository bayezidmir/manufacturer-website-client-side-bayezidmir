import { CardElement, ElementsConsumer, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import axiosPrivet from "../Api/axiosPrivet";
import Loading from "../Loading/Loading";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const { totalPrice, email, userName, _id } = order?.data;
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  const { data, isLoading } = useQuery("paymentPost", () =>
    axiosPrivet.post("/create-payment-intent", {
      totalPrice,
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(order);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(!loading);

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");

    setSuccess(" ");

    //confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      data?.data?.clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      }
    );
    if (intentError) {
      setLoading(loading);
      setCardError(intentError.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);

      let payments = {};
      const storePayment = localStorage.getItem("Payment-list");
      if (storePayment) {
        payments = JSON.parse(storePayment);
      }
      const isPayment = payments[paymentIntent.id];
      if (isPayment === "pending") {
        const update = "true";
        payments[paymentIntent.id] = update;
      } else {
        payments[paymentIntent.id] = "pending";
      }
      localStorage.setItem("Payment-list", JSON.stringify(payments));

      setSuccess("Congrats! your payment completed");
      toast.success("Congrats! your payment completed", { id: "payment-success" });
      const payment = {
        email: email,
        order: _id,
        transactionId: paymentIntent?.id,
      };

      const { data } = await axiosPrivet.patch(`/order/${_id}`, { payment });
      setLoading(!loading);
      setLoading(loading);
      navigate(from, { replace: true });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !data?.data?.clientSecret}
          className={" btn btn-sm btn-primary mt-5"}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="label-text-alt text-red-500">{cardError}</p>}
      {success && (
        <div>
          <p className="text-green-500 ">{success}</p>
          <p className="label-text-alt text-orange-500 font-bold">
            {" "}
            Transaction ID: {transactionId}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
