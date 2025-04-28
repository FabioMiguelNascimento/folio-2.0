import { useForm } from "@formspree/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Button from "../../components/common/Button/Button";

function Contact() {
  const [state, handleSubmit] = useForm("xkgrgjak");

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


  return (
    <motion.div
      className="contact-container"
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.3,
        once: true,
      }}
      variants={containerVariants}
    >
      <div className="contact-content-wrapper">
        <motion.div className="contact-left" variants={itemVariants}>
          <h2>Vamos Conversar?</h2>
          <p className="subtitle">
            Estou sempre aberto a novas oportunidades e desafios. Se você tem um projeto em mente
            ou quer bater um papo sobre desenvolvimento, fique à vontade para entrar em contato!
          </p>
          
          <div className="quick-contact">
            <h3>Contato Direto</h3>
            <Button
              href="mailto:fabiomnascimento05@gmail.com"
              icon={faEnvelope}
              variant="ghost"
              className="email-button"
            >
              fabiomnascimento05@gmail.com
            </Button>
            
            <div className="social-links">
              <Button
                href="https://github.com/FabioMiguelNascimento"
                target="_blank"
                rel="noopener noreferrer"
                icon={faGithub}
                variant="ghost"
              >
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/fab-nascimento/"
                target="_blank"
                rel="noopener noreferrer"
                icon={faLinkedin}
                variant="ghost"
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div className="contact-right" variants={itemVariants}>
          <div className="form-container">
            <h3>Envie uma Mensagem</h3>
            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              variants={itemVariants}
              autoComplete="off"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Sua mensagem"
                  rows="5"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={state.submitting}
                icon={state.submitting ? null : faPaperPlane}
                variant="pill"
                className="submit-button"
              >
                {state.submitting ? (
                  <span className="loading-text">
                    <motion.span
                      animate={{
                        opacity: [1, 0.5, 1],
                        transition: { duration: 1.5, repeat: Infinity }
                      }}
                    >
                      Enviando
                    </motion.span>
                    <span className="dots">...</span>
                  </span>
                ) : (
                  <>
                    Enviar mensagem
                  </>
                )}
              </Button>
              
              {state.succeeded && (
                <motion.div 
                  className="form-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Mensagem enviada com sucesso! Obrigado pelo contato.
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;