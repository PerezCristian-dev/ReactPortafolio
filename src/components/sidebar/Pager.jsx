import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";

export const Pager = () => {
  const [scroll, setScroll] = useState();

  const handleIncreaseScroll = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const handleDecreaseScroll = () => {
  //   setScroll(scroll - 900);
  // };

  return (
    <IconContext.Provider
      value={{
        className:
          "bg-black w-10 h-10 text-white hover:text-emerald-500 z-40 overflow-hidden ",
      }}
    >
      {scroll >= 100 ? (
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="fixed bottom-28 bg-black p-4 rounded-full xl:bottom-4 right-4 w-auto z-50 "
        >
          <span onClick={handleIncreaseScroll} className="transition-all">
            <FaAngleUp />
          </span>
        </motion.div>
      ) : (
        ""
      )}
    </IconContext.Provider>
  );
};
