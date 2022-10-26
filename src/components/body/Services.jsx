import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";

import { ServiceCarusel } from "./ServiceCarusel";

export const Services = () => {
  const [count, setCount] = useState(0);

  const handleLeft = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  const handleRight = () => {
    if (count >= allservices.length) return;
    setCount(count + 1);
  };

  return (
    <>
      <div className="overflow-hidden">
        <h1 className="font-bold text-3xl m-4 text-emerald-500 uppercase text-center">
          Services & Support
        </h1>
      </div>
      <div className="overflow-x-scroll scrollBar">
        <ServiceCarusel />
      </div>
    </>
  );
};
