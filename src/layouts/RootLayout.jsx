import { Outlet } from "react-router-dom";
import BackgroundGrid from "../components/common/BackgroundGrid/BackgroundGrid";
import Cursor from "../components/common/Cursor/cursor";
import ScrollAnimation from "../components/common/ScrollAnimation/scrollAnimation";
import ScrollToTop from "../components/common/ScrollToTop/ScrollToTop";
import Navbar from "./Navbar/navbar";
import Footer from "../sections/Footer/Footer";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <BackgroundGrid />
      <Cursor />
      <ScrollAnimation />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;