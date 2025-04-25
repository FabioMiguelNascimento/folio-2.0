import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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
            <div className="imageWrapper">
              <img src={project.image} alt={project.title} />
            </div>
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
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  <FontAwesomeIcon icon={faCode} /> Código
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

export default AllProjects;