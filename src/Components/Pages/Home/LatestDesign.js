import React from "react";
import LatestDesignCard from "./LatestDesignCard";
import card1 from "../../Assets/banner/banner-1.webp";
import card2 from "../../Assets/banner/banner-2.webp";
import card3 from "../../Assets/banner/banner-3.webp";

const LatestDesign = () => {
  return (
    <div className="container mx-auto  mt-8 mb-20 lg:mt-[-50px] ">
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-8">
        <LatestDesignCard>{card1}</LatestDesignCard>
        <LatestDesignCard>{card2}</LatestDesignCard>
        <LatestDesignCard>{card3}</LatestDesignCard>
      </div>
    </div>
  );
};

export default LatestDesign;
