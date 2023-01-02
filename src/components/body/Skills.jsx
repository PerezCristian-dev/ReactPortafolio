import { data } from "./../../data/data";
const { skills } = data;

export const Skills = ({ reference }) => {
  return (
    <div
      ref={reference}
      className="flex flex-col justify-center xl:flex-row xl:justify-between lg:p-32 xl:h-screen items-center xl:snap-start xl:overflow-hidden"
      id="#about"
    >
      <div className="flex flex-col justify-center items-center text-center  lg:w-[40%] lg:text-2xl">
        <div className="lg:box" />
        <span className="bg-emerald-500 w-40 text-center p-2 rounded-lg m-4 font-bold text-xl  ">
          About Me
        </span>

        <div className="self-center flex justify-center xl:ju xl:relative w-[80%] ">
          <img
            src="../aboutpic.png"
            className=" xl:relative xl:w-64 xl:z-50 rounded-xl h-96 "
          />
        </div>

        <h2 className="uppercase">
          I'm <b className="text-emerald-500"> Cristian Perez</b>
        </h2>
        <p className="text-sm xl:text-xl px-4">
          Full-Stack Developer and Data analyst with experience in graphic
          design, data science, analytics, business inteligence and building
          automated reports. I work with HTML5, CSS3, JavaScript, Java, React,
          NodeJS and currently expanding my knowledge in Angular.
        </p>
      </div>

      <div className=" flex flex-wrap justify-around w-[100%] xl:w-[70%]">
        <div className="bg-emerald-500 w-40 text-center p-2 rounded-lg m-4 font-bold text-xl ">
          <h2>My Skills</h2>
        </div>
        <div className=" flex flex-wrap justify-center">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className=" flex items-center justify-center w-[25%] rounded-lg xl:p-12 xl:h-20 border m-2 border-black bg-gradient-to-r from-black via-gray-900 to-black hover:bg-emerald-500 text-white"
            >
              <span className=" m-2 xl:m-4 flex flex-col items-center text-sm xl:text-md">
                <img
                  className="w-10 h-10 p-1 xl:m-2 xl:w-12 xl:h-12 "
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