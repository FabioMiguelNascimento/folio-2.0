import { createRoot } from "react-dom/client";
import Navbar from "./navbar";
import MainPage from "./mainPage";
import "../scss/imports.scss";
import Cursor from "./cursor";
import ScrollAnimation from "./scrollAnimation";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <ScrollAnimation />
      <main>
        <section id="mainPage">
          <MainPage />
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
