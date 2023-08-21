import React from "react";
import { data } from "../../data/data";
const { education } = data;

export const Education = () => {
  return (
    <div className="text-white rounded-lg p-2 xl:py-10 xl:px-10 py-6">
      <div className="flex flex-wrap justify-between xl:justify-center">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="overflow-hidden flex rounded-lg w-full h-[80px] xl:w-auto xl:h-auto mx-[10px] mb-[10px]  bg-project text-white xl:p-4 p-2 items-center"
          >
            <img
              src={edu.imgUrl}
              className=" h-16 w-16 xl:w-20 xl:h-20 mr-2 rounded-lg border border-black animate__animated animate__backInUp"
            />
            <div className="w-full">
              <span className="flex justify-between mb-2">
                <h2 className="colorswitch mr-3 text-sm xl:text-md">
                  {edu.institution}
                </h2>
                <h2 className="font-bold text-[12px] xl:text-md">
                  {edu.description}
                </h2>
              </span>
              <div>
                <h2 className="text-[12px] xl:text-md">{edu.status}</h2>
                <span className="flex items-center">
                  <div className="w-full h-1 bg-black mr-2 rounded-r-lg ">
                    {
                      <div
                        className={`h-full btn-custom rounded-r-lg fillingAnimate`}
                        style={{ width: `${edu.completion}%` }}
                      ></div>
                    }
                  </div>
                  <h2>{edu.completion}%</h2>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
