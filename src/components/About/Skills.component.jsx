import React from "react";
import { data } from "../../data/data";
const { skills } = data;

export const Skills = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between xl:justify-center p-10">
        {skills.map((skill, index) => {
          return (
            <span
              key={skill.id}
              className={`animate__animated animate__flipInX flex items-center justify-center w-[25%] rounded-lg xl:p-12 xl:h-20 border-0 m-2 border-black bg-gradient-to-r from-black via-gray-900 to-black hover:bg-emerald-500 text-white`}
            >
              <span className=" m-2 xl:m-4 flex flex-col items-center text-sm xl:text-md animate-pulse">
                <img
                  className="w-10 h-10 p-1 xl:m-2 xl:w-12 xl:h-12 "
                  src={skill.imgUrl}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
