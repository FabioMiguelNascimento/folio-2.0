import { motion, AnimatePresence } from "framer-motion";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ isOpen, onClose, children, special = [] }) {
  const slideIn = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal"
          variants={slideIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <FontAwesomeIcon icon={faTimes} className="close" onClick={onClose} />
          <div className="specialCtn">
            {special.length > 0
              ? special.map((item) => {
                  return <div key={item.id}>{item.content}</div>;
                })
              : null}
          </div>
          <div className="modalCtn">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
