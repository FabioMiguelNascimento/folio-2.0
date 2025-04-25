import { useState } from "react";
import Modal from "./components/common/Modal/modal";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/projects";
import Resume from "./sections/Resume/resume";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [special, setSpecial] = useState([]);

  return (
    <>
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
      </main>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default App;