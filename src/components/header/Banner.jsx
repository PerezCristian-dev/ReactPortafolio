import Typewriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Banner = ({ reference }) => {
  return (
    <div
      ref={reference}
      className="absolute h-screen w-screen p-3 text-center xl:text-left xl:px-52 xl:text-2xl"
    >
      <div className="absolute z-0 right-0 h-[250px] w-[250px] xl:top-10 xl:right-[100px] xl:h-[500px] xl:w-[500px]">
        <Spline scene="https://prod.spline.design/H7vTOaIqBDkQ0s52/scene.splinecode" />
        <div className="relative top-[-100px] left-[150px] xl:top-[-250px] xl:left-[250px] z-0 circle"></div>
      </div>

      <div className="relative mt-32 z-50 text-2xl xl:text-5xl animate__animated animate__backInLeft xl:absolute xl:top-[22%]">
        <h1 className="text-2xl xl:text-6xl">
          Hi there, I'm <b className="colorswitch">Cristian</b>
        </h1>
        <h2 className="colorswitch text-3xl font-bold xl:text-8xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "a Full-Stack Developer",
                "a Data Analyst",
                "an Excel Expert",
              ],
            }}
          />
        </h2>
        <p className="mb-10 mt-20">Do you have a project in mind?</p>
        <div className="w-full">
          <a
            className="d-inline text-sm mx-2 py-3 px-5 xl:mt-5 rounded-lg font-bold btn-custom xl:text-3xl animate-pulse"
            target="_blank"
            href={"https://www.linkedin.com/in/cristian-perez-425ab2237/"}
          >
            Get in touch
          </a>
          <a
            className="d-inline text-sm mx-2 py-3 px-5 xl:mt-5 rounded-lg font-bold xl:text-3xl animate-pulse bg-amber-600"
            target="_blank"
            href={"https://www.linkedin.com/in/cristian-perez-425ab2237/"}
          >
            Resume <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
      <div className="absolute w-[250px] h-[265px] bottom-[225px] z-10 left-[50%] translate-x-[-50%] xl:w-[450px] xl:h-[450px] xl:translate-x-[10rem] xl:bottom-[300px]">
        <div className="relative top-[-280px] left-[600px] w-[80px] h-[80px] xl:top-[-150px] xl:left-[680px] xl:w-[150px] xl:h-[150px]">
          <img
            src="../react.png"
            alt="react"
            className="round-animation1 drop-shadow-2xl"
          />
          <img
            src="../css.png"
            alt="css"
            className="round-animation2 drop-shadow-2xl"
          />
          <img
            src="../html.png"
            alt="html"
            className="round-animation3 drop-shadow-2xl"
          />
          <img
            src="../js.jpg"
            alt="js"
            className="round-animation4 drop-shadow-2xl"
          />
          <img
            src="../redux.png"
            alt="redux"
            className="round-animation5 drop-shadow-2xl"
          />
          <img
            src="../tail.png"
            alt="tail"
            className="round-animation6 drop-shadow-2xl"
          />
          <img
            src="../firebase.png"
            alt="firebase"
            className="round-animation7 drop-shadow-2xl"
          />
        </div>
        {/* <img
        src="../profile-picture.png"
        alt="My Pic"
        className="hidden xl:block xl:absolute z-0 h-[55%] right-[13%] top-[30%] animate-ping"
      /> */}
        <img
          src="../profile-picture.png"
          alt="My Pic"
          className="w-full absolute"
        />
      </div>
      <div className="banner-space-bg z-2"></div>
      <img
        src="../woonkly-woop.gif"
        className="space-rocker z-1"
        alt="spaceship"
      />
    </div>
  );
};
