import { motion } from "framer-motion";
import { data } from "../../data/data";

const { experience } = data;

export const Experience = () => {
  return (
    <div className="space-y-6">
      {experience.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card p-6 relative"
        >
          {job.current && (
            <span className="absolute top-4 right-4 badge badge-primary badge-sm">
              Current
            </span>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold text-primary">{job.position}</h3>
              <p className="text-lg font-semibold">{job.company}</p>
              <p className="text-sm text-base-content/60">
                {job.from} - {job.to || "Present"}
              </p>
            </div>

            <p className="text-base-content/80 leading-relaxed">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="badge badge-outline badge-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
