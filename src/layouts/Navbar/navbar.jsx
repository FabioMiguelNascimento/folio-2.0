import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../components/common/Modal/modal";
import ThemeChanger from "../../components/common/ThemeChanger/themeChanger";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = (
    <>
      <a href="#mainPage" className="item" onClick={(e) => handleLinkClick(e, '#mainPage')}>
        <li>Home</li>
      </a>
      <a href="#about" className="item" onClick={(e) => handleLinkClick(e, '#about')}>
        <li>Sobre</li>
      </a>
      <a href="#projects" className="item" onClick={(e) => handleLinkClick(e, '#projects')}>
        <li>Projetos</li>
      </a>
      <a href="#contato" className="item" onClick={(e) => handleLinkClick(e, '#contact')}>
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
          onClick={() => navigate("/")}>Fábio Miguel</h1>

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
