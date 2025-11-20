import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skills } from "../About/Skills.component";
import { Education } from "../About/Education.component";
import { Experience } from "../About/Experience.component";

interface AboutProps {
  reference?: React.RefObject<HTMLElement>;
}

type TabType = "skills" | "experience" | "education";

interface Tab {
  id: TabType;
  label: string;
  component: React.ComponentType;
  icon: string;
}

const tabs: Tab[] = [
  { id: "skills", label: "Skills", component: Skills, icon: "fa-solid fa-bolt" },
  { id: "experience", label: "Experience", component: Experience, icon: "fa-solid fa-briefcase" },
  { id: "education", label: "Education", component: Education, icon: "fa-solid fa-graduation-cap" },
];

export const About = ({ reference }: AboutProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("skills");

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || Skills;

  return (
    <section
      id="about"
      ref={reference}
      className="py-20 lg:py-32 bg-base-200"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-8 sticky top-24">
              <div className="aspect-square w-full mb-6 rounded-2xl overflow-hidden border-4 border-primary/20">
                <img
                  src="/aboutpic.png"
                  alt="Cristian Perez"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Cristian Perez</span>
              </h3>

              <p className="text-base-content/70 leading-relaxed">
                A highly skilled full-stack developer and data analyst with{" "}
                <strong className="text-primary">over 5 years of experience</strong>{" "}
                in the software industry. Passionate about building innovative web
                applications, architecting scalable solutions, and analyzing data to
                drive impactful business decisions.
              </p>

              <div className="divider" />

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                  <span>Based in Dominican Republic</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-briefcase text-primary"></i>
                  <span>Open to opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-globe text-primary"></i>
                  <span>Remote-friendly</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Tab Navigation */}
            <div className="tabs tabs-boxed bg-base-300 p-2 mb-8" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab gap-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? "tab-active bg-primary text-primary-content font-semibold"
                      : "hover:bg-base-200"
                  }`}
                >
                  <i className={tab.icon} aria-hidden="true"></i>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                id={`${activeTab}-panel`}
                role="tabpanel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
