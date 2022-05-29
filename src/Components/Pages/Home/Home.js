import React from "react";
import Summery from "../../Hooks/Summery";
import ClientReviews from "../Dashboard/ClientReviews";
import Review from "../Dashboard/Review";
import Banner from "./Banner";
import BestProduct from "./BestProduct";
import Brand from "./Brand";
import LatestDesign from "./LatestDesign";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div className="bg-neutral">
      <Banner></Banner>
      <Brand />
      <BestProduct />
      <Summery />
      <ClientReviews />
      <Newsletter />
    </div>
  );
};

export default Home;
