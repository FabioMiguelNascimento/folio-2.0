import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (e, path) => {
        e.preventDefault();
    
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(path);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.querySelector(path);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.footer
            className="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="footer-content">
                <div className="footer-sections">
                    <div className="footer-main">
                        <h3 className="footer-title">Fábio Miguel</h3>
                        <p className="footer-description">
                            Desenvolvedor Frontend | React.js | JavaScript | TypeScript | CSS
                        </p>
                        <div className="social-links">
                            <Button
                                href="https://github.com/fabiomigueldev"
                                target="_blank"
                                rel="noopener noreferrer"
                                icon={faGithub}
                                variant="pill"
                            >
                                GitHub
                            </Button>
                            <Button
                                href="https://linkedin.com/in/fab-nascimento"
                                target="_blank"
                                rel="noopener noreferrer"
                                icon={faLinkedin}
                                variant="pill"
                            >
                                LinkedIn
                            </Button>
                            <Button
                                href="mailto:fabiomnascimento05@gmail.com"
                                icon={faEnvelope}
                                variant="pill"
                            >
                                Email
                            </Button>
                        </div>
                    </div>
                    
                    <div className="footer-nav">
                        <div className="footer-links">
                            <h4>Navegação</h4>
                            <nav>
                                <Button 
                                    href="#mainPage" 
                                    variant="ghost"
                                    onClick={(e) => handleLinkClick(e, '#mainPage')}
                                >
                                    Início
                                </Button>
                                <Button 
                                    href="#about" 
                                    variant="ghost"
                                    onClick={(e) => handleLinkClick(e, '#about')}
                                >
                                    Sobre
                                </Button>
                                <Button 
                                    href="#projects" 
                                    variant="ghost"
                                    onClick={(e) => handleLinkClick(e, '#projects')}
                                >
                                    Projetos
                                </Button>
                                <Button 
                                    href="#contact" 
                                    variant="ghost"
                                    onClick={(e) => handleLinkClick(e, '#contact')}
                                >
                                    Contato
                                </Button>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Fábio Miguel. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}