import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faSass,
  faFigma,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Confetti from "./confetti";

function Resume({ setSpecial }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".skill-item").forEach((item) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const skillsGrid = document.querySelector(".skills-grid");
    skillsGrid?.addEventListener("mousemove", handleMouseMove);

    // Configurar botões especiais
    setSpecial([
      {
        id: "download",
        content: (
          <span
            className="special-btn"
            onClick={async () => {
              const url = "src/assets/resume.pdf";
              try {
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
                }
                // Mostra o confete
                setShowConfetti(true);
                setTimeout(async () => {
                  setShowConfetti(false);
                  const blob = await response.blob();
                  const link = document.createElement("a");
                  link.href = URL.createObjectURL(blob);
                  link.download = "resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }, 2000);
              } catch (error) {
                console.error(error.message);
              }
            }}
          >
            <FontAwesomeIcon icon={faDownload} />
            Download
          </span>
        ),
      },
    ]);

    return () => {
      skillsGrid?.removeEventListener("mousemove", handleMouseMove);
      setSpecial([]); // Limpa os botões especiais quando o componente é desmontado
    };
  }, [setSpecial]);

  return (
    <div className="resume-container">
      {showConfetti && <Confetti />}
      <h2>Desenvolvedor Front-end</h2>

      <div className="resume-section">
        <h3>Experiência</h3>
        <div className="experience-item">
          <h4>Desenvolvedor Front-end</h4>
          <p className="company">Allinsys</p>
          <p className="period">2024 - Presente</p>
          <ul>
            <li>Responsável pelo desenvolvimento do sistema Allinsys.</li>
            <li>
              Implementação de novas funcionalidades e otimização de código,
              assegurando a eficiência e a qualidade dos sistemas.
            </li>
            <li>
              Colaboração com a equipe de desenvolvimento para garantir a
              entrega de soluções robustas e alinhadas às necessidades dos
              usuários.
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>Habilidades</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <FontAwesomeIcon icon={faReact} />
            React
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faJs} />
            JavaScript
          </div>
          <div className="skill-item">
            <img src="src/assets/jqueryIco.webp" alt="jquery" />
            jQuery
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faHtml5} />
            HTML5
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faSass} />
            SCSS
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faGit} />
            Git
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faFigma} />
            Figma
          </div>
          <div className="skill-item">
            <img src="src/assets/websocket.png" alt="websocket" />
            WebSocket
          </div>
          <div className="skill-item">
            <img src="src/assets/mysqlIco.png" alt="mysql" />
            MySQL
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Educação</h3>
        <div className="education-item">
          <h4>Análise e Desenvolvimento de Sistemas</h4>
          <p className="institution">Senac RS</p>
          <p className="period">2022 - 2024</p>
        </div>
        <div className="education-item">
          <h4>Sistemas para Internet</h4>
          <p className="institution">
            FACCAT - Faculdades Integradas de Taquara/RS
          </p>
          <p className="period">2023 - 2027</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
