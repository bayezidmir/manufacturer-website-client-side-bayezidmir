import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="z-0 mb-20">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full h-screen object-scale-top "
              src="https://c7.alamy.com/comp/2DHAHF8/carpenter-working-with-modern-cordless-tools-and-wooden-bars-on-the-workbench-at-the-workshop-2DHAHF8.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-screen object-scale-top"
              src="https://c7.alamy.com/comp/2DC460P/different-electricians-supplies-on-yellow-background-background-of-professional-electrician-tools-with-space-for-text-2DC460P.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-screen object-scale-top"
              src="https://c7.alamy.com/comp/2D99FDK/different-electricians-supplies-on-yellow-background-background-of-professional-electrician-tools-with-space-for-text-and-sunshine-2D99FDK.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
