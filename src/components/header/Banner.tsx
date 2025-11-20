import { motion } from "framer-motion";
import { useState } from "react";

interface BannerProps {
  reference?: React.RefObject<HTMLElement>;
}

export const Banner = ({ reference }: BannerProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      ref={reference}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Background - Lightweight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-100/98 to-base-100/95 z-10" />

      {/* Content */}
      <div className="relative z-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left space-y-6 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Available for freelance work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Cristian</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-base-content/80">
                I'm a{" "}
                <span className="gradient-text font-bold">
                  Full-Stack Developer
                </span>
              </h2>
              <p className="text-base-content/60 text-sm">
                Building innovative web applications & analyzing data
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0"
            >
              With over 5 years of experience in React, Next.js, Node.js, and data
              analysis, I specialize in crafting scalable web applications and delivering
              data-driven insights. Let's build something amazing together.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="btn btn-primary btn-lg gap-2 group"
              >
                <span>Get in Touch</span>
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-perez-425ab2237/"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn btn-outline btn-lg gap-2 group"
              >
                <i className="fa-solid fa-download group-hover:translate-y-1 transition-transform"></i>
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4"
            >
              {[
                { name: "React", icon: "fa-brands fa-react" },
                { name: "TypeScript", icon: "fa-brands fa-js" },
                { name: "Next.js", icon: "fa-solid fa-arrow-right" },
                { name: "Node.js", icon: "fa-brands fa-node-js" },
                { name: "Tailwind", icon: "fa-brands fa-css3-alt" },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="badge badge-lg badge-outline hover:badge-primary transition-colors gap-1.5"
                >
                  <i className={tech.icon} aria-hidden="true"></i>
                  {tech.name}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              {/* Glow effect - animated */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full animate-pulse" />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-transparent">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse" />
                )}
                <img
                  src="/profile-picture.png"
                  alt="Cristian Perez - Full Stack Developer"
                  className={`w-full h-full object-cover transition-opacity duration-300 mix-blend-normal ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: 'transparent' }}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                  width="800"
                  height="800"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-base-content/50 hover:text-primary transition-colors">
          <span className="text-sm">Scroll down</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};
