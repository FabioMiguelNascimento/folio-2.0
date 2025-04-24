import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    margin: "100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" }
    },
  };

  return (
    <motion.div
      ref={ref}
      className="projectsCtn"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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