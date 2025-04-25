import { Outlet } from "react-router-dom";
import BackgroundGrid from "../components/common/BackgroundGrid/BackgroundGrid";
import Cursor from "../components/common/Cursor/cursor";
import ScrollAnimation from "../components/common/ScrollAnimation/scrollAnimation";
import ScrollToTop from "../components/common/ScrollToTop/ScrollToTop";
import Navbar from "./Navbar/navbar";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <BackgroundGrid />
      <Cursor />
      <ScrollAnimation />
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;