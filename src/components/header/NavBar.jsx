import { ConstructionOutlined } from "@mui/icons-material";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  if (darkMode) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }

  return (
    <>
      <div className="flex-col md:flex-row md:absolute z-10 p-10 md:py-10 md:px-36 w-full flex justify-between items-center animate__animated animate__backInDown)">
        <h1 className="font-bold text-emerald-500 text-3xl my-2">
          {"<dev>CRISTIAN</dev>"}
        </h1>
        {
          <div
            onClick={toggleMode}
            className="flex items-center transition-all duration-100 overflow-hidden"
          >
            <FaSun />
            <h1>Light</h1>
            <div
              className={`flex mx-4  w-12 bg-slate-700 rounded-xl ${
                darkMode ? "justify-end bg-black" : ""
              }`}
            >
              <div className=" justify-self-start rounded-full h-5 w-5 bg-white m-1 border-green-500"></div>
            </div>

            <FaMoon />
            <h1>Dark</h1>
          </div>
        }
        {/* <button className=" bg-emerald-500 p-1 ml-3 hover:font-bold hover:text-emerald-500">Contact Me</button> */}
      </div>
    </>
  );
};
