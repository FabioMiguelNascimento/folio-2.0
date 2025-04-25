import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import AllProjects from "./sections/Projects/AllProjects.jsx";
import "./styles/imports.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<AllProjects />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
