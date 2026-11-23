import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ONIX_URL } from "../data/projects";
import "../views/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__name">Yessica Maitia</p>
          <p className="footer__meta">
            {t("ui.role")} ·{" "}
            <a href={ONIX_URL} target="_blank" rel="noopener noreferrer">
              onixai.net
            </a>
          </p>
        </div>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/-jessica-sosa-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/sosayessicase" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:ysosamaitia@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
      <div className="wrap">
        <p className="footer__copy">
          © {new Date().getFullYear()} {t("footer.name")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
