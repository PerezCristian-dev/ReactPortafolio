import Typewriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Banner = ({ reference }) => {
  return (
    <div
      ref={reference}
      className="flex px-5 items-center xl:items-start justify-center text-center  xl:text-left flex-col xl:justify-center xl:px-48 xl:h-screen w-full xl:text-2xl"
    >

      <div className="absolute z-0 top-0 right-[100px] h-[500px] w-[500px]">
      <Spline scene="https://prod.spline.design/H7vTOaIqBDkQ0s52/scene.splinecode" />
      <div className="circle relative top-[-250px] left-[250px] z-0"></div>

      </div>
      <div className="float absolute w-[800px] h-[800px] right-[0px]  bottom-[180px] z-10">
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
        {/* <img
        src="../profile-picture.png"
        alt="My Pic"
        className="hidden xl:block xl:absolute z-0 h-[55%] right-[13%] top-[30%] animate-ping"
      /> */}
        <img
          src="../profile-picture.png"
          alt="My Pic"
          className="w-full absolute xl:w-auto z-0 xl:h-[800px] xl:right-[330px] xl:top-[200px]"
        />
      </div>
      <div className="absolute z-50 text-2xl xl:container xl:w-3/5 xl:text-5xl animate__animated animate__backInLeft">
        <h1 className="text-6xl">
          Hi there, I'm <b className="colorswitch">Cristian</b>
        </h1>
        <h2 className="colorswitch text-center font-bold text-8xl xl:text-left">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "a Full-Stack Developer",
                "a Data & Reporting Analyst",
                "an Excel Expert",
              ],
            }}
          />
        </h2>
        <p className="mb-10 mt-20">Do you have a project in mind?</p>
        <a
          className="text-1xl py-3 px-10 xl:mt-5 rounded-lg font-bold btn-custom xl:text-3xl animate-pulse"
          target="_blank"
          href={"https://www.linkedin.com/in/cristian-perez-425ab2237/"}
        >
          Get in touch
        </a>
        <a
          className="text-1xl py-3 px-10 mx-10 xl:mt-5 rounded-lg font-bold xl:text-3xl animate-pulse bg-amber-600"
          target="_blank"
          href={"https://www.linkedin.com/in/cristian-perez-425ab2237/"}
        >
          Resume <FontAwesomeIcon icon={faDownload} />
        </a>
        
      </div>
      <div className="banner-space-bg z-2"></div>
      <img src="../woonkly-woop.gif" className="space-rocker z-1" alt="spaceship" />
    </div>
  );
};
