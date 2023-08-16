import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { data } from "../../data/data";
const { experience: exp } = data;

export const Experience = () => {
  const expPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [experience, setExperience] = useState(
    exp.filter((data, index) => index === 0 || index === 1)
  );

  const pages = [];
  for (let i = 0; i < Math.round(exp.length / expPerPage); i++) {
    pages.push(i + 1);
  }
  useEffect(() => {
    setExperience(
      exp.filter((data, index) => {
        const start = currentPage * expPerPage - 1;
        const end = start + 1;

        return index + 1 === start || index + 1 === end;
      })
    );
  }, [currentPage]);

  console.log({ pages });

  return (
    <div className="flex flex-col p-10 h-[650px] overflow-hidden justify-between">
      <div className="h-75">
        {experience.map((exp) => {
          return (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="card w-98 bg-base-100 shadow-xl mx-2 mb-2"
            >
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="card-title colorswitch">
                    {exp.position}
                    {exp.current && (
                      <div className="badge badge-primary">Current</div>
                    )}
                  </h2>
                  <div className="badge badge-ghost px-4 py-2">
                    {exp.company}
                  </div>
                </div>
                <p>{exp.description}</p>

                <div className="card-actions justify-between w-full mt-2">
                  <div className="text-info">
                    <span>{exp.from} to </span>
                    <span>{exp.to ?? "Present"}</span>
                  </div>
                  <div>
                    {exp.technologies.map((tech) => {
                      return <div className="badge badge-outline mx-1">{tech}</div>;
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="join h-25 self-end mt-4">
        {pages.map((data) => {
          return (
            <button
              key={`${data}`}
              className={`join-item ${
                currentPage === data ? "btn btn-primary" : "btn"
              }`}
              onClick={() => setCurrentPage(data)}
            >
              {data}
            </button>
          );
        })}
      </div>
    </div>
  );
};
