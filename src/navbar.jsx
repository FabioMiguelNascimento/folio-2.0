import React from "react";
import ThemeChanger from "./themeChanger";

function Navbar() {
  return (
    <header className="navbarCtn">
      <h1 className="logo">Fábio Miguel</h1>
      <ul className="navbarList">
        <li className="item">Home</li>
        <li className="item">Sobre</li>
        <li className="item">Projetos</li>
        <li className="item">Contato</li>
        <li className="item"> <ThemeChanger /></li>
      </ul>
    </header>
  );
}

export default Navbar;