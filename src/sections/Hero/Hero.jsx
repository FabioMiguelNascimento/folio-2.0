import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundGrid from "../../components/common/BackgroundGrid/BackgroundGrid";

function MainPage({ openResume }) {
  return (
    <div className="hero-wrapper">
      <BackgroundGrid />
      <div className="leftCtn">
        <div className="title">
          <div className="title-row">
            <p className="hello">
              Oi <img src="/icons/emoji.png" className="emoji" alt="emoji" /> eu sou o
            </p>
            <p className="name">Fábio</p>
          </div>
          <p className="prof">Desenvolvedor WEB</p>
        </div>
        <div className="buttonsCtn">
          <a
            href="https://github.com/FabioMiguelNascimento"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/fab-nascimento/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:fabiomnascimento05@gmail.com">
            Contato <FontAwesomeIcon icon={faPaperPlane} />
          </a>
          <a onClick={openResume}>
            Currículo <FontAwesomeIcon icon={faFileInvoice} />
          </a>
        </div>
      </div>

      <div className="rightCtn">
        <img src="/images/profile/profile.jpg" alt="" />
      </div>
    </div>
  );
}

export default MainPage;
