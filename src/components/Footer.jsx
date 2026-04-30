import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../views/Footer.css";

const Footer = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/-jessica-sosa-",
    github: "https://github.com/sosayessicase",
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className="footer-container">
        <div className="footer-content">
          {/* Name and Title */}
          <div className="footer-info">
            <h3 className="footer-name">Yessica Maitia</h3>
            <p className="footer-title">Software Engineer</p>
          </div>

          {/* Quote */}
          <div className="footer-quote">
            <p>&quot;{t("footer.quote")}&quot;</p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="footer-icon" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub className="footer-icon" />
            </a>
            <a
              href="mailto:ysosamaitia@gmail.com"
              className="footer-social-link"
              aria-label="Email"
            >
              <FaEnvelope className="footer-icon" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.name")}.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
