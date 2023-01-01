import Typewriter from "typewriter-effect";

export const Banner = ({ reference }) => {
  return (
    <div
      ref={reference}
      className="flex px-5 items-center md:items-start justify-center text-center  md:text-left flex-col md:justify-center md:px-48 md:h-screen w-full md:text-2xl md:bg-img"
    >
      <img
        src="../Portafolio BG-Image.png"
        alt="My Pic"
        className="hidden md:block md:absolute z-0 h-[55%] right-[13%] top-[30%] animate-ping"
      />
      <img
        src="../Portafolio BG-Image.png"
        alt="My Pic"
        className="w-full md:w-auto md:absolute z-0 md:h-[95%] md:right-0 md:top-[8%]"
      />
      <div className="text-2xl md:container md:w-3/5 md:text-5xl animate__animated animate__backInLeft">
        <h1 className="">
          Hello There, <br /> I'm{" "}
          <b className="uppercase">Cristian Perez</b>
        </h1>
          <h2 className="text-emerald-500 text-center md:text-left">
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
          className="text-1xl p-2 md:px-10 md:mt-4 rounded-lg font-bold  bg-emerald-500 md:text-3xl animate-pulse"
          target="_blank"
          href={"https://www.linkedin.com/in/cristian-perez-425ab2237/"}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};
