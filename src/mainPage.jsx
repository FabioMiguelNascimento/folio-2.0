import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faFileInvoice } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
  return (
    <>
      <div className="leftCtn">
        <div className="title">
          <p className="hello">Oi <img src="../src/assets/emoji.png" className="emoji"/> eu sou o</p>
          <p className="name">Fábio</p>
          <p className="prof">Desenvolvedor WEB</p>
        </div>
        <div className="buttonsCtn">
          <a href="https://github.com/FabioMiguelNascimento" target="_blank" rel="noopener noreferrer">
            Github <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/fab-nascimento/" target="_blank" rel="noopener noreferrer">
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:fabio@example.com">
            Contato <FontAwesomeIcon icon={faPaperPlane} />
          </a>
          <a href="/path/to/curriculo.pdf" target="_blank" rel="noopener noreferrer">
            Currículo <FontAwesomeIcon icon={faFileInvoice} />
          </a>
        </div>
      </div>

      <div className="rightCtn">
        <img src="../src/assets/profile.jpg" alt="Fábio" />
      </div>
    </>
  );
}

export default MainPage;
