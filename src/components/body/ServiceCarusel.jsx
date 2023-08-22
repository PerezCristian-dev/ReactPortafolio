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
        delay: 4000,
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
            <div className="card w-[85%] glass h-[400px]">
              <figure>
                <img src={service.imgUrl} alt={service.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
