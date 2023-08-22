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
        className: "group-hover:text-primary bg-black relative z-50",
      }}
    >
      <nav className="bg-black xl:bg-transparent w-full xl:w-auto justify-between flex xl:block fixed bottom-0 z-50 px-4 py-2 xl:m-4 animate__animated animate__backInUp">
        <NavLink
          to={"home"}
          className={({ isActive, isPending }) =>
            isActive ? "text-primary" : "text-white"
          }
          onClick={() => onscroll(home)}
        >
          <button className="flex items-center rounded-lg xl:my-2 group xl:hover:menuHover2">
            <div className="p-3 flex rounded-lg bg-black text-3xl">
              <FaHome />
            </div>
            {
              <h2 className="hidden transition-all items-center xl:oculto group-hover:menuHover group-hover:text-primary relative z-0">
                Home
              </h2>
            }
          </button>
        </NavLink>
        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-white"
          }
        >
          <button
            onClick={() => onscroll(about)}
            className="flex items-center rounded-lg xl:my-2 group xl:hover:menuHover2"
          >
            <div className="p-3 flex rounded-lg bg-black text-3xl">
              <FaUser />
            </div>
            {
              <h2
                className={` hidden transition-all items-center xl:oculto group-hover:menuHover group-hover:text-primary relative z-0`}
              >
                About Me
              </h2>
            }
          </button>
        </NavLink>

        <NavLink
          to={"projects"}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-white"
          }
        >
          <button
            onClick={() => onscroll(projects)}
            className="flex items-center rounded-lg xl:my-2 group xl:hover:menuHover2"
          >
            <div className="p-3 flex rounded-lg bg-black text-3xl">
              <FaBriefcase />
            </div>
            {
              <h2 className=" hidden transition-all items-center xl:oculto group-hover:menuHover group-hover:text-primary relative z-0">
                Projects
              </h2>
            }
          </button>
        </NavLink>
        {/* 
        <NavLink to={education}>
          <button
            onClick={() => onscroll(education)}
            className="flex items-center text-white rounded-lg my-2 group xl:hover:menuHover2"
          >
            <FaGraduationCap />
            {
              <h2 className=" hidden transition-all items-center xl:oculto group-hover:menuHover group-hover:text-primary relative z-0">
                Education
              </h2>
            }
          </button>
        </NavLink> */}

        <NavLink
          to={"contact"}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-white"
          }
        >
          <button
            onClick={() => onscroll(contact)}
            className="flex items-center rounded-lg xl:my-2 group xl:hover:menuHover2"
          >
            <div className="p-3 flex rounded-lg bg-black text-3xl">
              <FaEnvelopeOpenText />
            </div>
            {
              <h2 className=" hidden transition-all items-center xl:oculto group-hover:menuHover group-hover:text-primary relative z-0">
                Contact Me
              </h2>
            }
          </button>
        </NavLink>
      </nav>
    </IconContext.Provider>
  );
};
