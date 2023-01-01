import { data } from "./../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

const services = data.Services;

export const ServiceCarusel = () => {
  const [screenSize, setScreenSize] = useState(window.screen.width);

  const [slides, setSlides] = useState({
    slp: 5,
    space: 2,
    spg: 1,
  });

  const slideSetter = (size) => {
    const slides = {};
    if (size >= 767 && size <= 1440) {
      slides.slp = 3;
      slides.space = 2;
      slides.spg = 1;
    } else if (size > 1440) {
      slides.slp = 4;
      slides.space = 2;
      slides.spg = 1;
    } else if (size < 767) {
      slides.slp = 1;
      slides.space = 0;
      slides.spg = 1;
    }
    return slides;
  };

  useEffect(() => {
    setSlides((prev) => slideSetter(screenSize));
  }, [screenSize]);

  return (
    <Swiper
      slidesPerView={slides.slp}
      spaceBetween={slides.space}
      slidesPerGroup={slides.spg}
      loop={true}
      loopFillGroupWithBlank={false}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {services.map((service) => {
        return (
          <SwiperSlide key={service.id}>
            <div className=" overflow-hidden animate__animated animate__backInRight w-[95%] h-[425px] m-2 rounded-xl shadow-2xl bg-project text-white">
              <img
                src={service.imgUrl}
                alt={service.name}
                className="w-full h-[60%]"
              />
              <div className="flex flex-col items-center justify-center h-[40%]">
                <h2 className="font-bold mt-2">{service.name}</h2>
                <p className="px-5 my-1 text-center">{service.description}</p>
                <button className="bg-emerald-500 p-2 m-2 rounded-lg animate-pulse">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
