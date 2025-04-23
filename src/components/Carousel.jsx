import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/margin.css";

function Carousel() {
  const slides = [
    {
      id: 1,
      content: "Memory 1",
      image: "/cr_01.jpg",
    },
    {
      id: 2,
      content: "Memory 2",
      image: "/cr_02.jpg",
    },
    {
      id: 3,
      content: "Memory 3",
      image: "/cr_03.jpg",
    },
    {
      id: 4,
      content: "Memory 4",
      image: "/cr_04.jpg",
    },
    {
      id: 5,
      content: "Memory 5",
      image: "/cr_05.jpg",
    },
  ];

  return (
    <div className="w-full max-w-[300px] mx-auto margin-top margin-bottom">
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 20px; /* Decrease size */
          height: 20px; /* Decrease size */
          color: white; /* Change arrow color to white */
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px; /* Decrease arrow icon size */
        }
      `}</style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-[200px] h-[250px] bg-white/10 border border-white/20 rounded-xl overflow-hidden mx-auto">
              <img
                src={slide.image}
                alt={slide.content}
                className="w-[200px] h-[250px]"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-1">
                <p className="text-xs font-semibold">{slide.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;