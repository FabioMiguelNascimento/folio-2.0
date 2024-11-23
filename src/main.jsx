import { createRoot } from "react-dom/client";
import Navbar from "./navbar";
import MainPage from "./mainPage";
import "./scss/imports.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="mainPage">
          <MainPage />
        </section>

      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
