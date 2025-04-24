import React from "react";
import ThemeChanger from "../../components/common/ThemeChanger/themeChanger";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbarCtn ${!isOpen ? "has-mask" : ""}`}>
      <h1 className="logo">Fábio Miguel</h1>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
      </div>

      <ul className={`navbarList ${isOpen ? "active" : ""}`}>
        <a href="#mainPage" className="item" onClick={handleLinkClick}>
          <li>Home</li>
        </a>
        <a href="#about" className="item" onClick={handleLinkClick}>
          <li>Sobre</li>
        </a>
        <a href="#projects" className="item" onClick={handleLinkClick}>
          <li>Projetos</li>
        </a>
        <a href="" className="item" onClick={handleLinkClick}>
          <li>Contato</li>
        </a>
        <li className="item">
          <ThemeChanger />
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
