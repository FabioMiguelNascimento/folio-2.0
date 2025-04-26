import {
  faFigma,
  faGit,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import Button from "../../components/common/Button/Button";
import Confetti from "../../components/ui/Confetti/confetti";

function Resume({ setSpecial }) {
  const [showConfetti, setShowConfetti] = useState(false);

  const skills = [
    {
      name: "JQuery",
      url: "/icons/jqueryIco.webp",
    },
    {
      name: "HTML5",
      icon: faHtml5,
    },
    {
      name: "CSS",
      icon: faSass,
    },
    {
      name: "JavaScript",
      icon: faJs,
    },
    {
      name: "React",
      icon: faReact,
    },
    {
      name: "Git",
      icon: faGit,
    },
    {
      name: "Figma",
      icon: faFigma,
    },
    {
      name: "WebSocket",
      url: "/icons/websocket.png",
    },
    {
      name: "MySQL",
      url: "/icons/mysqlIco.png",
    },
  ];

  const education = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Senac RS",
      year: "2022 - 2024",
    },
    {
      degree: "Sistemas para Internet",
      institution: "FACCAT - Faculdades Integradas de Taquara/RS",
      year: "2023 - 2027",
    },
  ];

  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const updateMousePosition = useCallback((e) => {
    requestAnimationFrame(() => {
      document.querySelectorAll(".skill-item").forEach((item) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }, []);

  useEffect(() => {
    const throttledMouseMove = throttle(updateMousePosition, 16);
    const skillsGrid = document.querySelector(".skills-grid");

    if (skillsGrid) {
      skillsGrid.addEventListener("mousemove", throttledMouseMove);
    }

    setSpecial([
      {
        id: "download",
        content: (
          <Button
            variant="secondary"
            icon={faDownload}
            onClick={async () => {
              try {
                const response = await fetch("/assets/resume.pdf");
                if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
                }
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
            Download
          </Button>
        ),
      },
    ]);

    return () => {
      if (skillsGrid) {
        skillsGrid.removeEventListener("mousemove", throttledMouseMove);
      }
      setSpecial([]);
    };
  }, [setSpecial, updateMousePosition]);

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
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.icon ? (
                <FontAwesomeIcon icon={skill.icon} size="2x" />
              ) : (
                <img src={skill.url} alt={skill.name} className="skill-icon" />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <h3>Educação</h3>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

Resume.propTypes = {
  setSpecial: PropTypes.func.isRequired,
};

export default Resume;
