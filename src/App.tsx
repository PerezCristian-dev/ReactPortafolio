import { useRef } from "react";
import { Banner } from "./components/header/Banner";
import { SideBar } from "./components/sidebar/SideBar";
import { About } from "./components/body/About";
import { Projects } from "./components/body/Projects";
import { Contact } from "./components/body/Contact";
import { Footer } from "./components/footer/Footer";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

import "./index.css";

export const App = () => {
  // Section refs for navigation
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-base-100 custom-scrollbar">
        {/* Navigation */}
        <SideBar
          elements={{
            home: homeRef,
            about: aboutRef,
            projects: projectsRef,
            contact: contactRef,
          }}
        />

        {/* Main Content */}
        <main>
          <Banner reference={homeRef} />
          <About reference={aboutRef} />
          <Projects reference={projectsRef} />
          <Contact reference={contactRef} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
