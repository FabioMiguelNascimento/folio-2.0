import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function Modal({ isOpen, onClose, children, special = [] }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Previne scroll do body
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset"; // Restaura scroll do body
    };
  }, [isOpen, onClose]);

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
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="modal"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button 
              className="close"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="specialCtn">
              {special.length > 0
                ? special.map((item) => {
                    return <div key={item.id}>{item.content}</div>;
                  })
                : null}
            </div>
            <div className="modalCtn">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;
