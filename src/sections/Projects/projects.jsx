import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Button from "../../components/common/Button/Button";
import LazyImage from "../../components/common/LazyImage/LazyImage";
import { projects } from "../../data/projects";

function Projects() {
  const featuredProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="projectsSection"
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.3,
        margin: "5px 0px 5px 5px",
        once: true,
      }}
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={cardVariants}>
        <div className="header-content">
          <h2>Projetos Destacados</h2>
          <Button to="/projects" variant="ghost" icon={faArrowRight}>
            Ver todos
          </Button>
        </div>
      </motion.div>

      <div className="projectsGrid">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`projectCard ${
              index === 2 ? "projectCard--featured" : ""
            }`}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="imageWrapper"
            >
              <LazyImage src={project.image} alt={project.title} />
            </a>
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="actions">
                {project.codeUrl && (
                  <Button
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={faGithub}
                    variant="ghost"
                  >
                    Código
                  </Button>
                )}  
                <Button
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={faArrowUpRightFromSquare}
                  iconPosition="right"
                  variant="pill"
                >
                  Demo
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
