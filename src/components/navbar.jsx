import React from "react";
import ThemeChanger from "./themeChanger";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className={`navbarCtn ${!isOpen ? 'has-mask' : ''}`}>
      <h1 className="logo">Fábio Miguel</h1>
      
      <div className={`hamburger ${isOpen ? 'active' : ''}`} 
           onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbarList ${isOpen ? 'active' : ''}`}>
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