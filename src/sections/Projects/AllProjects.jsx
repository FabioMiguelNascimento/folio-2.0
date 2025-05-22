import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Button from "../../components/common/Button/Button";
import LazyImage from "../../components/common/LazyImage/LazyImage";
import { projects } from "../../data/projects";

function AllProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="allProjectsPage">
      <div className="pageHeader">
        <h1>Projetos</h1>
        <p>
          Aqui estão alguns dos meus projetos recentes. Cada projeto é uma oportunidade de
          aprendizado e crescimento profissional.
        </p>
      </div>

      <motion.div 
        className="projectsGrid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="projectCard"
            variants={cardVariants}
          >
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="imageWrapper"
            >
              <LazyImage 
                src={project.image} 
                alt={project.title}
                loadDelay={Math.random() * 1000} // Adiciona um delay aleatório entre 0-1s para efeito de demonstração
              />
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
      </motion.div>
    </main>
  );
}

export default AllProjects;