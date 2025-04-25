import { motion } from "framer-motion";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, x: 75 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="projectsCtn"
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.3,
        margin: "5px 0px 5px 5px",
        once: true,
      }}
      variants={containerVariants}
    >
      <div className="placeholder">
        <h2>Projetos</h2>
        <p>Em desenvolvimento... 🚧</p>
      </div>
    </motion.div>
  );
}

export default Projects;
