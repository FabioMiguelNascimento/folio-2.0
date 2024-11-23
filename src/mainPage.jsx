import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faFileInvoice } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
  return (
    <>
      <div className="leftCtn">
        <div className="title">
          <p className="hello">Oi ✌️ eu sou o</p>
          <p className="name">Fábio</p>
          <p className="prof">Desenvolvedor WEB</p>
        </div>
        <div className="buttonsCtn">
          <button>
            Github <FontAwesomeIcon icon={faGithub} />
          </button>
          <button>
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button>
            Contato <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          <button>
            Currículo <FontAwesomeIcon icon={faFileInvoice} />
          </button>
        </div>
      </div>

      <div className="rightCtn">
        <img src="../src/assets/profile.jpg" alt="Fábio" />
      </div>
    </>
  );
}

export default MainPage;
