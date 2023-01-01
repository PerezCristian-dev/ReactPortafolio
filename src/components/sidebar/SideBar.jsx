import { IconContext } from "react-icons";
import {
  FaBriefcase,
  FaEnvelopeOpenText,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";

import { NavLink, Navigate, Link, useNavigate } from "react-router-dom";

export const SideBar = ({ elements, onscroll }) => {
  const { home, about, projects, education, contact } = elements;

  return (
    <IconContext.Provider
      value={{
        className:
          "react-icon group-hover:text-emerald-500 bg-black relative z-50",
      }}
    >
      <div className="bg-black md:bg-transparent w-full md:w-auto justify-between flex md:block fixed bottom-0 z-50 p-4 md:m-4 animate__animated animate__backInUp">
        <button
          onClick={() => onscroll(home)}
          className="flex items-center text-white rounded-lg md:my-2 group md:hover:menuHover2"
        >
          <FaHome />
          {
            <h2 className=" hidden transition-all items-center md:oculto group-hover:menuHover group-hover:text-emerald-500 relative z-0">
              Home
            </h2>
          }
        </button>

        <NavLink to={"about"}
   
        >
          <button
            onClick={() => onscroll(about)}
            
            className={`flex items-center text-emerald-500 rounded-lg my-2 group md:hover:menuHover2 md:flex`}
          >
            <FaUser />
            {
              <h2 className={` hidden transition-all items-center md:oculto group-hover:menuHover group-hover:text-emerald-500 relative z-0`}>
                About Me
              </h2>
            }
          </button>
        </NavLink>

        <NavLink to={"projects"}>
          <button
            onClick={() => onscroll(projects)}
            className="flex items-center text-white rounded-lg my-2 group md:hover:menuHover2"
          >
            <FaBriefcase />
            {
              <h2 className=" hidden transition-all items-center md:oculto group-hover:menuHover group-hover:text-emerald-500 relative z-0">
                Projects
              </h2>
            }
          </button>
        </NavLink>

        <NavLink to={education}>
          <button
            onClick={() => onscroll(education)}
            className="flex items-center text-white rounded-lg my-2 group md:hover:menuHover2"
          >
            <FaGraduationCap />
            {
              <h2 className=" hidden transition-all items-center md:oculto group-hover:menuHover group-hover:text-emerald-500 relative z-0">
                Education
              </h2>
            }
          </button>
        </NavLink>

        <button
          onClick={() => onscroll(contact)}
          className="flex items-center text-white rounded-lg my-2 group md:hover:menuHover2"
        >
          <FaEnvelopeOpenText />
          {
            <h2 className=" hidden transition-all items-center md:oculto group-hover:menuHover group-hover:text-emerald-500 relative z-0">
              Contact Me
            </h2>
          }
        </button>
      </div>
    </IconContext.Provider>
  );
};
