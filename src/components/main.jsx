import { useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./navbar";
import MainPage from "./mainPage";
import "../scss/imports.scss";
import Cursor from "./cursor";
import ScrollAnimation from "./scrollAnimation";
import Modal from "./modal";
import Resume from "./resume";

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
          <MainPage openResume={() => setIsResumeOpen(true)} />
        </section>
        {/* <div style={{ height: "100vh" }}></div> */}
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
