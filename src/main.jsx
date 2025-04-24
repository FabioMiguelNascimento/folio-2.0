import { useState } from "react";
import { createRoot } from "react-dom/client";
import Cursor from "./components/common/Cursor/cursor";
import Modal from "./components/common/Modal/modal";
import ScrollAnimation from "./components/common/ScrollAnimation/scrollAnimation";
import Navbar from "./layouts/Navbar/navbar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Resume from "./sections/Resume/Resume";
import "./styles/imports.scss";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [special, setSpecial] = useState([]);

  return (
    <>
      <Cursor />
      <Navbar />
      <ScrollAnimation />
      <Modal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        special={special}
      >
        <Resume setSpecial={setSpecial} />
      </Modal>
      <main>
        <section id="mainPage">
          <Hero openResume={() => setIsResumeOpen(true)} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
