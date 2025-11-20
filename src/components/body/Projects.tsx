import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "../../data/data";

interface ProjectsProps {
  reference?: React.RefObject<HTMLElement>;
}

export const Projects = ({ reference }: ProjectsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { projects } = data;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      ref={reference}
      className="py-20 lg:py-32 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-4xl lg:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in web development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </motion.div>

        {/* Project Showcase */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Info */}
              <div className="space-y-6 order-2 lg:order-1">
                <div>
                  <span className="text-primary font-mono text-sm">
                    Project {currentIndex + 1} of {projects.length}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-bold mt-2 mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-base-content/70 text-lg leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-base-content/60 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="tooltip tooltip-top"
                        data-tip={tech.tech}
                      >
                        <div className="glass-card p-3 hover:scale-110 transition-transform">
                          <img
                            src={tech.url}
                            alt={tech.tech}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-4">
                  <button className="btn btn-primary gap-2">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    View Project
                  </button>
                  <button className="btn btn-outline gap-2">
                    <i className="fa-brands fa-github"></i>
                    Source Code
                  </button>
                </div>
              </div>

              {/* Project Media */}
              <div className="order-1 lg:order-2">
                <div className="glass-card p-4 rounded-2xl overflow-hidden">
                  <video
                    src={currentProject.videoURL}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg shadow-2xl"
                    aria-label={`Demo video of ${currentProject.title}`}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="btn btn-circle btn-outline hover:btn-primary"
              aria-label="Previous project"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-base-300 hover:bg-base-content/20"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn btn-circle btn-outline hover:btn-primary"
              aria-label="Next project"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
