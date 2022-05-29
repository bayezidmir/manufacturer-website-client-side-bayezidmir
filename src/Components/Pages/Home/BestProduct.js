import React, { useState } from "react";
import { useQuery } from "react-query";
import Fetcher from "../../Api/Fetcher";
import Loading from "../../Loading/Loading";
import ServicesCard from "./ServicesCard";

const BestProduct = () => {
  const { data: products, isLoading } = useQuery("homeServices", () => Fetcher.get("/services"));
  if (isLoading) {
    return <Loading />;
  }

  if (products?.data) {
    products.data.length = 3;
  }

  return (
    <div className="container mx-auto my-24">
      <div className="mb-10 ">
        <h1 className="text-center  text-4xl font-bold ">BEST PRODUCTS</h1>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 justify-items-center">
          {products?.data.map((product) => (
            <ServicesCard service={product} key={product._id}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
