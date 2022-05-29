import React from "react";
import { Link } from "react-router-dom";

const MyOrderState = ({ transactionId, orderId, orderPaid }) => {
  let isPaid;
  let paymentList = {};
  const storePayment = localStorage.getItem("Payment-list");
  if (storePayment) {
    paymentList = JSON.parse(storePayment);
  }
  isPaid = paymentList[transactionId];

  return (
    <div>
      {orderPaid ? (
        isPaid === "true" ? (
          <span className="text-green-500">paid</span>
        ) : (
          <span className="text-success font-bold">pending</span>
        )
      ) : (
        <Link to={`/dashboard/payment/${orderId}`} className="btn btn-sm btn-success ">
          pay
        </Link>
      )}
    </div>
  );
};

export default MyOrderState;
