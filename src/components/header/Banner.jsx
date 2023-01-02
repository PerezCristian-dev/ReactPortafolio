import Typewriter from "typewriter-effect";

export const Banner = ({ reference }) => {
  return (
    <div
      ref={reference}
      className="flex px-5 items-center xl:items-start justify-center text-center  xl:text-left flex-col xl:justify-center xl:px-48 xl:h-screen w-full xl:text-2xl xl:bg-img"
    >
      <img
        src="../Portafolio BG-Image.png"
        alt="My Pic"
        className="hidden xl:block xl:absolute z-0 h-[55%] right-[13%] top-[30%] animate-ping"
      />
      <img
        src="../Portafolio BG-Image.png"
        alt="My Pic"
        className="w-full xl:w-auto xl:absolute z-0 xl:h-[95%] xl:right-0 xl:top-[8%]"
      />
      <div className="text-2xl xl:container xl:w-3/5 xl:text-5xl animate__animated animate__backInLeft">
        <h1 className="">
          Hello There, <br /> I'm{" "}
          <b className="uppercase">Cristian Perez</b>
        </h1>
          <h2 className="text-emerald-500 text-center xl:text-left">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "a Front-End Developer",
                  "a Data & Reporting Analyst",
                  "an Excel Expert",
                ],
              }}
            />
          </h2>
        <p className="my-6">Do you have a project in mind?</p>
        <a
          className="text-1xl p-2 xl:px-10 xl:mt-4 rounded-lg font-bold  bg-emerald-500 xl:text-3xl animate-pulse"
          target="_blank"
          href={"https://www.linkedin.com/in/cristian-perez-425ab2237/"}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};
