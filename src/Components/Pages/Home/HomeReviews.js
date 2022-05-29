import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";
import Loading from "../../Loading/Loading";

const HomeReviews = () => {
  const { data, isLoading } = useQuery("reviews", () => axiosPrivet.get("/reviews"));

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" w-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 2250000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {data?.data &&
          data?.data?.map((review, index) => (
            <SwiperSlide key={index}>
              <div className=" py-10">
                <div class="card lg:max-w-lg min-h-[320px]  mt-5 max-h-[300px]  shadow-2xl mx-auto">
                  <figure class="px-10 mx-auto max-w-[150px] pt-5">
                    <img
                      className="rounded-full h-[100px] w-[100px] object-cover"
                      src={review?.userPhoto}
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">{review.name}</h2>
                    <div className="flex w-full justify-between">
                      <p>profession: {review?.profession}</p>
                      <p>rating: {review?.rating}</p>
                    </div>
                    <p className="pb-11">
                      {review?.description.length > 100
                        ? review?.description.slice(0, 120)
                        : review?.description}
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HomeReviews;
