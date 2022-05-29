import React from "react";

const State = ({ id, handlePending }) => {
  let isPaid;
  let paymentList = {};
  const storePayment = localStorage.getItem("Payment-list");
  if (storePayment) {
    paymentList = JSON.parse(storePayment);
  }
  isPaid = paymentList[id];

  return (
    <div>
      {isPaid === "true" ? (
        <span className="text-green-500">paid</span>
      ) : (
        <button onClick={() => handlePending(id)} className="btn btn-sm">
          pending
        </button>
      )}
    </div>
  );
};

export default State;
