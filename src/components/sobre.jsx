import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Sobre() {
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
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const year = new Date().getFullYear() - 2023;

  return (
    <motion.div
      ref={ref}
      className="sobreCtn"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h2 className="title">Sobre Mim</h2>
      <p className="description">
        Olá! Sou um desenvolvedor web apaixonado por criar soluções inovadoras e
        eficientes. Com experiência em várias tecnologias web modernas, estou
        sempre buscando aprender e me aprimorar para entregar os melhores
        resultados.
      </p>
      <div className="infoGrid">
        <motion.div
          className="infoItem"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3>Habilidades</h3>
          <p>HTML, CSS, JavaScript, React, Node.js, SQL, Jquery</p>
        </motion.div>
        <motion.div
          className="infoItem"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <h3>Educação</h3>
          <p>Bacharelado em Sistemas para Internet</p>
        </motion.div>
        <motion.div
          className="infoItem"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
          <h3>Experiência</h3>
          <p>
            {year} {year > 1 ? "anos" : "ano"} como Desenvolvedor Web
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Sobre;
