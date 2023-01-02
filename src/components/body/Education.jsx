import { useState } from "react";
import { data } from "../../data/data";
import { Services } from "./Services";

export const Education = ({ reference }) => {
  const [education, setEducation] = useState(data.education);
  //
  return (
    <div className="p-4 xl:p-20" id={"#about"} ref={reference}>
      <h2 className="uppercase font-bold text-emerald-500 text-xl xl:text-3xl py-4 text-center">
        Education
      </h2>
      <div className="text-white rounded-lg p-2 xl:p-10">
        <div className="flex flex-wrap justify-between xl:justify-center">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="overflow-hidden flex rounded-lg w-full h-[80px] xl:w-auto xl:h-auto m-[3px] bg-project text-white xl:p-4 p-2 items-center"
            >
              <img
                src={edu.imgUrl}
                className=" h-16 w-16 xl:w-20 xl:h-20 mr-2 rounded-lg border border-black animate__animated animate__backInUp"
              />
              <div className="w-full">
                <span className="flex justify-between mb-2">
                  <h2 className="text-emerald-500 mr-3 text-sm xl:text-md">{edu.institution}</h2>
                  <h2 className="font-bold text-[12px] xl:text-md">{edu.description}</h2>
                </span>
                <div>
                  <h2 className="text-[12px] xl:text-md">{edu.status}</h2>
                  <span className="flex items-center">
                    <div className="w-full h-1 bg-black mr-2 rounded-r-lg ">
                      {
                        <div
                          className={`h-full bg-emerald-500 rounded-r-lg fillingAnimate`}
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
      <Services />
    </div>
  );
};
