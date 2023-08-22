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
      <footer className="flex flex-col-reverse  bg-slate-900 text-white justify-center py-4 items-center text-center">
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/cristian-perez-425ab2237/"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
          <a href="https://www.facebook.com/cristian.r.perez3/" target="_blank">
            <FaFacebookSquare size={25} />
          </a>
          <a
            href="https://www.instagram.com/cristian.r.perez3/?hl=es"
            target="_blank"
          >
            <FaInstagramSquare size={25} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3lZL3S2a2w4rKWSkp7Lopg"
            target="_blank"
          >
            <FaYoutubeSquare size={25} />
          </a>
          <a
            href="https://github.com/PerezCristian-dev/PerezCristian"
            target="_blank"
          >
            <FaGithubSquare size={25} />
          </a>
        </div>
        <p>
          &copy; 2022 with <b className="colorswitch">♥</b>{" "}
          Christheadvenger
        </p>
      </footer>
    </IconContext.Provider>
  );
};
