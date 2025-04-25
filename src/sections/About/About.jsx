import {
  faArrowRight,
  faBriefcase,
  faCode,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const year = new Date().getFullYear() - 2023;

  return (
    <motion.div
      className="about-container"
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.3,
        margin: "5px 0px 5px 5px",
        once: true,
      }}
      variants={containerVariants}
    >
      <div className="about-header">
        <motion.h2 variants={itemVariants}>Sobre Mim</motion.h2>
        <motion.div className="header-line" variants={itemVariants} />
      </div>

      <div className="about-content">
        <motion.div className="about-text" variants={itemVariants}>
          <p>
            Sou um desenvolvedor web que adora transformar ideias em realidade.
            Gosto de explorar novas tecnologias e estou sempre aprendendo para
            entregar soluções criativas e eficientes. Se você tem um projeto em
            mente, vamos conversar!
          </p>
        </motion.div>

        <motion.div className="about-grid" variants={itemVariants}>
          <div className="about-section experience">
            <div className="section-header">
              <FontAwesomeIcon icon={faBriefcase} />
              <h3>Experiência</h3>
            </div>
            <div className="section-content">
              <div className="timeline-item">
                <span className="date">2024 - Presente</span>
                <h4>Desenvolvedor Front-end</h4>
                <span className="company">Allinsys</span>
                <p>
                  Desenvolvimento de sistemas web modernos e otimização de
                  código
                </p>
              </div>
              <span className="experience-time">
                {year} {year > 1 ? "anos" : "ano"} de experiência
              </span>
            </div>
          </div>

          <div className="about-section education">
            <div className="section-header">
              <FontAwesomeIcon icon={faGraduationCap} />
              <h3>Educação</h3>
            </div>
            <div className="section-content">
              <div className="timeline-item">
                <span className="date">2022 - 2024</span>
                <h4>Análise e Desenvolvimento de Sistemas</h4>
                <span className="company">Senac RS</span>
              </div>
              <div className="timeline-item">
                <span className="date">2023 - 2027</span>
                <h4>Sistemas para Internet</h4>
                <span className="company">FACCAT</span>
              </div>
            </div>
          </div>

          <div className="about-section skills">
            <div className="section-header">
              <FontAwesomeIcon icon={faCode} />
              <h3>Principais Tecnologias</h3>
            </div>
            <div className="section-content skills-content">
              <div className="skill-item">
                <span className="skill-level" />
                <span>Front-end</span>
                <p>React, JavaScript, HTML5, CSS/SCSS</p>
              </div>
              <div className="skill-item">
                <span className="skill-level" />
                <span>Back-end</span>
                <p>Node.js, SQL, WebSocket</p>
              </div>
              <div className="skill-item">
                <span className="skill-level" />
                <span>Ferramentas</span>
                <p>Git, Figma, jQuery</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="about-footer" variants={itemVariants}>
          <a href="#contact" className="contact-link">
            Vamos conversar <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
