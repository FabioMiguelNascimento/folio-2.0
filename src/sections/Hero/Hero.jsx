import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileInvoice, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import BackgroundGrid from "../../components/common/BackgroundGrid/BackgroundGrid";
import Button from "../../components/common/Button/Button";
import LazyImage from "../../components/common/LazyImage/LazyImage";

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
          <Button
            href="https://github.com/FabioMiguelNascimento"
            target="_blank"
            rel="noopener noreferrer"
            icon={faGithub}
            variant="pill"
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/fab-nascimento/"
            target="_blank"
            rel="noopener noreferrer"
            icon={faLinkedin}
            variant="pill"
          >
            LinkedIn
          </Button>
          <Button
            href="/#contact"
            icon={faPaperPlane}
            variant="pill"
          >
            Contato
          </Button>
          <Button
            onClick={openResume}
            icon={faFileInvoice}
            variant="pill"
          >
            Currículo
          </Button>
        </div>
      </div>

      <div className="rightCtn">
        <LazyImage src="/images/profile/profile.jpg" alt="Profile" />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  openResume: PropTypes.func.isRequired
};

export default MainPage;
