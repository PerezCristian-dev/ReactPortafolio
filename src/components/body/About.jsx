import { useState } from "react";
import { data } from "../../data/data";
import { Skills } from "../About/Skills.component";
import { Education } from "../About/Education.component";
import { Experience } from "../About/Experience.component";
const { skills } = data;

export const About = ({ reference }) => {
  const [active, setIsActive] = useState("Education");
  const handleActiveMenu = (tab) => {
    setIsActive(tab);
  };

  const tabs = [
    {
      name: "Skills",
      active: false,
      component: () => <Skills />,
    },
    {
      name: "Education",
      active: true,
      component: () => <Education />,
    },
    {
      name: "Experience",
      active: false,
      component: () => <Experience />,
    },
  ];
  return (
    <section
      ref={reference}
      className="bg-gray-900 flex flex-col xl:snap-start w-screen p-4 xl:px-60 xl:py-12"
      id="#about"
    >
      {/* <div className="circle z-0 relative"></div> */}

      <div className="flex flex-col xl:flex-row justify-around items-center ">
        <div className="xl:w-[100%] flex flex-col xl:h-full items-center">
          <div className="flex flex-col justify-center items-center">
            <span className="p-2 mb-1 font-bold text-4xl">About Me</span>
            <div className="flex justify-center items-center xl:h-full">
              <img
                src="../aboutpic.png"
                className="rounded-xl h-[100px] xl:h-[500px] shadow-xl my-4"
              />
            </div>
            <p className="text-sm xl:text-2xl text-center h-full pb-8 px-5">
              I'm <b className="colorswitch"> Cristian Perez</b> a highly
              skilled full stack developer and data analyst with 3 years of
              experience in the software. I’m passionate about building
              innovative web applications and analyzing data to extract insights
              that drive business decisions. I have experience working with
              popular frameworks and libraries such as React, Next.js, Nest.js,
              and GraphQL.
            </p>
          </div>
          <div className="tabs tabs-boxed">
            {tabs.map((tab) => (
              <a
                className={`tab ${active === tab.name ? "tab-active" : ""}`}
                onClick={() => handleActiveMenu(tab.name)}
              >
                {tab.name}
              </a>
            ))}
          </div>
          {tabs.map((tab) => (tab.name === active ? tab?.component() : ""))}
        </div>
      </div>
    </section>
  );
};

export default About;
