import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Brand = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center mb-10 font-bold">Brand</h1>
      </div>
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="h-48 w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ9c_5sNf1uP-3FuCqXVVbaYwhgHeLKFhJw&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-48 w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDIpCo8ZotPFKjhxiHnwP6jfwinnsx3BdCg&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-48 w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KGH5u_UZs5GBgR2WgeZ86C24PegkmQ1a7w&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-48 w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9bhoI0u2auVn8Ypn7wEsKRG4rlD4XW4iPA&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-48 w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMGH8qTRFvcyDwnZzadVtRnnOORAjJzYHVw&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-48 w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBunre1pHttnprOmA7G5KhlVwVIfrpbDBNA&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Brand;
