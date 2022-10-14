import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLink,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <IconContext.Provider
      value={{ className: "react-icon hover:text-emerald-500" }}
    >
      <div className="flex flex-col-reverse h-96 md:h-10  bg-black text-white justify-center p-20 items-center">
        <div className="flex">
          <FaLinkedin size={25} />
          <FaFacebookSquare size={25} />
          <FaInstagramSquare size={25} />
          <FaYoutubeSquare size={25} />
          <FaGithubSquare size={25} />
        </div>
        <p>
          &copy; 2022 with <b className="text-emerald-500">♥</b>{" "}
          Christheadvenger
        </p>
      </div>
    </IconContext.Provider>
  );
};
