import { data } from "./../../data/data";
const { skills } = data;

export const Skills = ({ reference }) => {
  return (
    <div
      ref={reference}
      className="flex flex-col justify-center md:flex-row md:justify-between md:p-32 md:h-screen items-center md:snap-start md:overflow-hidden"
      id="#about"
    >
      <div className="flex flex-col justify-center items-center text-center  md:w-[40%] md:text-2xl">
        <div className="md:box" />
        <span className="bg-emerald-500 w-40 text-center p-2 rounded-lg m-4 font-bold text-xl  ">
          About Me
        </span>

        <div className="self-center flex justify-center md:ju md:relative w-[80%] ">
          <img
            src="../aboutpic.png"
            className=" md:relative md:w-64 md:z-50 rounded-xl h-96 "
          />
        </div>

        <h2 className="uppercase">
          I'm <b className="text-emerald-500"> Cristian Perez</b>
        </h2>
        <p className="text-sm md:text-md md:text-left px-4">
          Front-End Developer and Data analyst with experience in graphic
          design, data science, analytics, business inteligence and building
          automated reports. Currently expanding my knowledge in Node JS, Python
          and Angular. I work with HTML5, CSS3, JavaScript, Java, React JS and
          more.
        </p>
      </div>

      <div className=" flex flex-wrap justify-around w-[100%] md:w-[70%]">
        <div className="bg-emerald-500 w-40 text-center p-2 rounded-lg m-4 font-bold text-xl ">
          <h2>My Skills</h2>
        </div>
        <div className=" flex flex-wrap justify-center">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className=" flex items-center justify-center w-[25%] rounded-lg md:p-12 md:h-20 border m-2 border-black bg-gradient-to-r from-black via-gray-900 to-black hover:bg-emerald-500 text-white"
            >
              <span className=" m-2 md:m-4 flex flex-col items-center text-sm md:text-md">
                <img
                  className="w-10 h-10 p-1 md:m-2 md:w-12 md:h-12 "
                  src={skill.imgUrl}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;