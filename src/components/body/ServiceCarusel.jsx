import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { data } from "./../../data/data";

const services = data.Services;

export const ServiceCarusel = () => {
  // const carousel = useRef();
  // const [largo, setLargo] = useState(0);

  // useEffect(() => {
  //   setLargo(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <div className="">
      <motion.div
        // ref={carousel}
        // drag="x"
        // dragConstraints={{ right: 0, left: -largo }}
        className="flex items-center flex-wrap justify-center"
      >
        {services.map((service) => {
          return (
            <motion.div
              key={service.id}
              // whileTap={{ cursor: "grabbing" }}
              className="animate__animated animate__backInRight w-[400px] m-2 rounded-xl shadow-2xl bg-project text-white flex flex-col items-center"
            >
              <img
                src={service.imgUrl}
                alt={service.name}
                className="w-full h-64"
              />
              <h2 className="font-bold">{service.name}</h2>
              <p className="">{service.description}</p>
              <button className="bg-emerald-500 p-2 m-2 rounded-lg animate-pulse">
                Learn More
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
