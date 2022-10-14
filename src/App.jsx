import { Education, Projects, Skills, Contact } from "./components/body";
import { Footer } from "./components/footer";
import { NavBar, Banner } from "./components/header";
import { SideBar } from "./components/sidebar/SideBar";
import {
  Animator,
  batch,
  Fade,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import "./index.css";

import { useRef } from "react";
import { Pager } from "./components/sidebar/Pager";

export const App = () => {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 20, delay: 0 });

  // console.log(scrollRef);

  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elmentRef) => {
    window.scrollTo({
      top: elmentRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SideBar
        elements={{ home, about, projects, education, contact }}
        onscroll={scrollToSection}
      />
      <NavBar />
      {/* <section ref={scrollRef}> */}

      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={Zoom()}>
            <Banner reference={home} />
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <Skills reference={about} />

      <Projects reference={projects} />

      <Education reference={education} />

      <Pager />
      <Contact reference={contact} />
      <Footer />
    </>
  );
};
