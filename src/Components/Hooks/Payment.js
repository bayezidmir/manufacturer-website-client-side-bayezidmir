import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivet from "../Api/axiosPrivet";
import Loading from "../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0Wy7JukytloPq3tBQgU5bh3thMtApZQDehJIejKVo60xbaIx5iwp9a1KLgG7JvuBDOLFin37UH3AdZlN4PTGx200T0fwpVJV"
);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["payment", id], () =>
    axiosPrivet.get(`/order-payment/${id}`)
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(order);
  const { email, price, totalPrice, productName, quantity, userName, _id } = order?.data;

  return (
    <div>
      <div class="hero min-h-fit mt-12 bg-base-200">
        <div class="hero-content flex-col lg:flex-col">
          <div class="text-center lg:text-left">
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body text-black">
                <h2 class="card-title text-center">Hello, {userName}</h2>
                <p>Please Pay for {productName}</p>
                <p className="flex justify-between">
                  <span>
                    price <span className="font-bold">{price}</span>
                  </span>
                  <span>
                    Quantity: <span className="font-bold">{quantity}</span>
                  </span>
                </p>
                <p>
                  <span>
                    Total <span className="font-bold">$ {totalPrice}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="card max-h-52 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
