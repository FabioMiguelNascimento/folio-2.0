import React from "react";
import Modal from "../../components/common/Modal/modal";
import ThemeChanger from "../../components/common/ThemeChanger/themeChanger";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <a href="/#mainPage" className="item" onClick={handleLinkClick}>
        <li>Home</li>
      </a>
      <a href="/#about" className="item" onClick={handleLinkClick}>
        <li>Sobre</li>
      </a>
      <a href="/#projects" className="item" onClick={handleLinkClick}>
        <li>Projetos</li>
      </a>
      <a href="/#contato" className="item" onClick={handleLinkClick}>
        <li>Contato</li>
      </a>
      <li className="item">
        <ThemeChanger />
      </li>
    </>
  );

  return (
    <header className={`navbarCtn ${!isOpen ? "has-mask" : ""}`}>
      <h1 className="logo"
          onClick={() => window.location.href = "/"}>Fábio Miguel</h1>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
      </div>

      <ul className="navbarList desktop-nav">
        {navLinks}
      </ul>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <nav className="mobile-nav">
          <ul>
            {navLinks}
          </ul>
        </nav>
      </Modal>
    </header>
  );
}

export default Navbar;
