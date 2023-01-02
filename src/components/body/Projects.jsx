
import { data } from "./../../data/data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { UseSlider } from "../../hooks/UseSlider";

export const Projects = ({ reference }) => {

  const { slide, handleBackward, handleForward, handleSlideClick } = UseSlider(data);

  return (
    <div
      ref={reference}
      className="p-2  md:flex md:flex-col md:items-center overflow-hidden text-white md:text-xl bg-project md:px-10 h-[100% - 20px] md: py-10"
    >
      <h2 className="uppercase font-bold text-center text-emerald-500 text-2xl">
        Portafolio
      </h2>
      <p className="hidden md:block text-center leading-none">
        Here you will find a few of the projects I've worked on
      </p>

      {slide.map((project) =>
        project.active ? (
          <div
            key={project.id}
            className={
              "flex flex-col items-center md:flex-row md:justify-center md:w-[75%]"
            }
          >
            <div className="flex flex-col justify-center items-center text-center py-4 px-2 md:w-1/2 md:p-32">
              <motion.h1
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="text-emerald-500 font-bold uppercase md:text-xl md:mb-4"
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
                className="w-100% mb-4 font-light text-md"
              >
                {project.description}
              </motion.p>
              <motion.button
                key={new Date()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 md:mb-10 bg-emerald-500 rounded-lg w-40 hover:bg-black hover:text-white animate-pulse"
              >
                Learn More
              </motion.button>
            </div>

            <div className="flex flex-col md:w-1/2 bg-project items-center justify-between rounded-l-3xl md:h-[650px]">
              <h2 className="uppercase text-emerald-500">Technologies</h2>
              <div className="md:p-10 flex animate-pulse ease-in-out duration-1000">
                {project.technologies.map((tech) => (
                  <motion.span
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={tech.id}
                    className="m-2 p-2 md:p-4 rounded-lg  items-center  hover:bg-emerald-500 uppercase bg-black animate__animated animate__flipInY"
                  >
                    {<img src={tech.url} className=" w-4 md:w-6 md:h-6" />}
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
                className="overflow-hidden md:rounded-3xl w-[100vw] md:w-[85%] transition-opacity animate__animated animate__fadeInRight  shadow-lg shadow-emerald-700 "
              ></motion.video>

              <div className="m-10 flex items-center overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleBackward(project.id)}
                  className={
                    "bg-black h-10 md:h-[50px] md:w-[50px] px-4 rounded-xl hover:text-emerald-500"
                  }
                >
                  <FaAngleLeft />
                </motion.button>

                {slide.map((project) => (
                  <div
                    className={` ${
                      project.active ? "bg-emerald-500" : "bg-black"
                    }  w-4 h-4 md:w-10 md:h-10 mx-[7px] my-0 md:mx-2  rounded-md md:rounded-lg hover:bg-emerald-500`}
                    key={project.id}
                    onClick={() => handleSlideClick(project.id)}
                  ></div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleForward(project.id)}
                  className={
                    "bg-black h-10 md:h-[50px] md:w-[50px] px-4 rounded-xl hover:text-emerald-500"
                  }
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
  );
};

export default Projects;
