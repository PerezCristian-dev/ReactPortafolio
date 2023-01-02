import { useState, useEffect } from "react";

export const UseSlider = (data) => {

const [slide, setSlide] = useState([...data.projects]);

const handleBackward = (id) => {
  let counter = id - 1;
  setSlide((prev) => {
    if (counter <= 0) {
      const maxSlide = slide.length - 1;
      const newState = [...prev];
      newState[maxSlide] = { ...prev[maxSlide], active: true };
      newState[counter] = { ...prev[counter], active: false };
      return newState;
    } else {
      const newState = [...prev];
      newState[counter] = { ...prev[counter], active: false };
      newState[counter - 1] = { ...prev[counter - 1], active: true };
      return newState;
    }
  });
};

const handleForward = (id) => {
  let counter = id - 1;
  setSlide((prev) => {
    if (counter >= slide.length - 1) {
      const newState = [...prev];
      newState[0] = { ...prev[0], active: true };
      newState[counter] = { ...prev[counter], active: false };
      return newState;
    } else {
      const newState = [...prev];
      newState[counter] = { ...prev[counter], active: false };
      newState[counter + 1] = { ...prev[counter + 1], active: true };
      return newState;
    }
  });
};

const handleAuto = () => {
  const activeSlide = slide.filter((project) => project.active === true);
  const { id } = activeSlide[0];
  handleForward(id);
};

const handleSlideClick = (id) => {
  let counter = id - 1;
  setSlide((prev) => {
    const partialState = prev.map((item) => ({ ...item, active: false }));
    const newState = [...partialState];
    newState[counter] = { ...newState[counter], active: true };
    return newState;
  });
};

useEffect(() => {
  const interval = setInterval(() => {
    handleAuto();
  }, 10000);
  return () => clearInterval(interval);
}, [slide]);

  return {
    slide,
    handleBackward,
    handleForward,
    handleSlideClick,
  }
}

