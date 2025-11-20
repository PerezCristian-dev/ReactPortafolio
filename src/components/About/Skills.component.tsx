import { motion } from "framer-motion";
import { data } from "../../data/data";

const { skills } = data;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export const Skills = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="glass-card p-6 group cursor-pointer"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-16 h-16">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <img
                src={skill.imgUrl}
                alt={skill.name}
                className="relative w-full h-full object-contain"
              />
            </div>

            <div className="text-center w-full">
              <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>

              {/* Progress bar */}
              <div className="w-full bg-base-300 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.percentange }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>

              <span className="text-xs text-base-content/60 mt-1 block">
                {skill.percentange}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
