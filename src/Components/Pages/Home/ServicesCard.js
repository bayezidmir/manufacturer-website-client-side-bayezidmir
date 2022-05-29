import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, name, price, img, description, minOrder, available } = service;
  return (
    <>
      <div className="card lg:max-w-sm card-compact max-w-sm bg-base-100 shadow-2xl">
        <figure>
          <img className="h-48 w-full object-cover" src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-lg">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <p className="text-lg">Price: ${price}</p>
            <p className="text-right text-lg">min-order: {minOrder}</p>
          </div>
          <p className="text-lg">Available: {available}</p>
          {description?.length > 60 ? (
            <p className="text-lg">Description: {description.slice(0, 60)}...</p>
          ) : (
            <p className="text-lg">Description:{description} </p>
          )}
          <div className="card-actions h-full items-center justify-end">
            <p className="flex items-center text-lg h-full ">
              <span className="mr-3">Rating:</span>{" "}
              <span className="rating rating-xs">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
              </span>
            </p>
            <Link to={`/buyNow/${_id}`} className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
