import { IconContext } from "react-icons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { data } from "./../../data/data";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const Projects = ({ reference }) => {
  const [slide, setSlide] = useState(1);
  const [projects, setProjects] = useState(
    data.projects.filter((project) => project.id === slide)
  );
  const [animation, setAnimation] = useState({ exit: -200, start: 200 });

  useEffect(() => {
    setProjects(data.projects.filter((project) => project.id === slide));
  }, [slide]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleBackward();
    }, 10000);
    return () => clearInterval(interval);
  }, [slide]);

  const handleForward = () => {
    if (slide >= data.projects.length) {
      setSlide(1);
      return;
    }
    setSlide(slide + 1);
  };

  const handleBackward = () => {
    if (slide <= 1) {
      setSlide(data.projects.length);
      return;
    }
    setSlide(slide - 1);
  };

  // initial={{ x: -300, opacity: 0 }}
  // animate={{ x: 0, opacity: 1 }}
  // exit={{ x: 300, opacity: 0 }}

  return (
    <IconContext.Provider
      value={{
        className: "react-icon rounded-lg bg-black hover:text-emerald-500 ",
      }}
    >
      <div
        ref={reference}
        className="overflow-hidden text-white md:text-xl bg-project md:px-10 md:h-screen"
      >
        <h2 className="uppercase font-bold text-center text-emerald-500 text-2xl py-4 md:mt-10">
          Projects
        </h2>
        {projects.map((project) =>
          project.active ? (
            <div
              key={project.id}
              className={
                "flex flex-col items-center md:flex-row md:justify-center w-full"
              }
            >
              <div className="flex flex-col justify-center items-center text-center w-1/2 md:p-32">
                <motion.h1
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 0, opacity: 0 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="text-emerald-500 font-bold uppercase text-xl"
                >
                  {project.title}
                </motion.h1>
                <motion.p
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="my-2 text-base"
                >
                  {project.description}
                </motion.p>
                <motion.button
                  key={new Date()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-emerald-500 rounded-lg w-56 hover:bg-black hover:text-white"
                >
                  Learn More
                </motion.button>
              </div>
              <div className="flex flex-col md:w-1/2 bg-project md:h-screen items-center justify-center rounded-l-3xl">
                <h2 className="uppercase text-emerald-500">Technologies</h2>
                <div className="text-white md:p-10 flex animate-pulse ease-in-out duration-1000">
                  {project.technologies.map((tech) => (
                    <motion.span
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 200, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      key={tech.id}
                      className="m-2 p-4 rounded-lg  items-center  hover:bg-emerald-500 uppercase bg-black animate__animated animate__flipInY"
                    >
                      {<img src={tech.url} className="w-10 h-10" />}
                    </motion.span>
                  ))}
                </div>

                <motion.video
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  src={project.videoURL}
                  autoPlay={true}
                  muted
                  controls
                  className="overflow-hidden md:rounded-3xl w-full transition-opacity animate__animated animate__fadeInRight  shadow-lg shadow-emerald-700 "
                ></motion.video>
                <div className="m-10 flex items-center overflow-hidden">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleForward}
                  >
                    <FaAngleLeft />
                  </motion.button>

                  {data.projects.map((x) => (
                    <div
                      className={
                        "bg-black w-10 h-10 mx-2 rounded-lg hover:bg-emerald-500 m-2"
                      }
                      key={x.id}
                    ></div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleBackward}
                  >
                    <FaAngleRight />
                  </motion.button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </IconContext.Provider>
  );
};
