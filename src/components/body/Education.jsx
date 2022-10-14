import { useState } from "react";
import { data } from "../../data/data";
import { Services } from "./Services";

export const Education = ({ reference }) => {
  const [education, setEducation] = useState(data.education);
  //
  return (
    <div className="p-4 md:p-20" id={"#about"} ref={reference}>
      <h2 className="uppercase font-bold text-emerald-500 text-3xl py-4 text-center">
        Education
      </h2>
      <div className="text-white rounded-lg  md:p-10">
        <div className="flex flex-wrap justify-between md:justify-center">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="flex rounded-lg w-full md:w-auto md:h-45 m-1 bg-project text-white p-4 items-center"
            >
              <img
                src={edu.imgUrl}
                className="w-20 h-20 mr-2 rounded-lg border border-black animate__animated animate__backInUp"
              />
              <div className="w-full">
                <span className="flex justify-between mb-2 ">
                  <h2 className="text-emerald-500 mr-3">{edu.institution}</h2>
                  <h2 className="font-bold">{edu.description}</h2>
                </span>
                <div>
                  <h2 className="">{edu.status}</h2>
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
