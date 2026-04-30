import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  FaBrain,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import profile from "../images/profile.png";
import "../views/AboutMe.css";

const AboutMe = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const stats = [
    {
      number: "5+",
      label: t("aboutMe.stats.yearsExperience"),
      color: "#8b5cf6",
    },
    {
      number: "30+",
      label: t("aboutMe.stats.projectsCompleted"),
      color: "#a78bfa",
    },
    {
      number: "300+",
      label: t("aboutMe.stats.happyClients"),
      color: "#c4b5fd",
    },
  ];

  const services = [
    {
      title: t("aboutMe.services.webDev.title"),
      description: t("aboutMe.services.webDev.description"),
      icon: <FaLaptopCode />,
    },
    {
      title: t("aboutMe.services.fullStackDev.title"),
      description: t("aboutMe.services.fullStackDev.description"),
      icon: <FaRocket />,
    },
    {
      title: t("aboutMe.services.aiEngineering.title"),
      description: t("aboutMe.services.aiEngineering.description"),
      icon: <FaBrain />,
    },
    {
      title: t("aboutMe.services.mentoring.title"),
      description: t("aboutMe.services.mentoring.description"),
      icon: <FaChalkboardTeacher />,
    },
  ];

  return (
    <div className={`about-page ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-headline">
            {t("aboutMe.hero.headlineStart")}{" "}
            <span className="highlight-name">Yessica</span>.
            <br />
            <span className="hero-subtext">
              {t("aboutMe.hero.headlineEndLine1")}
            </span>
            <span className="hero-subtext hero-subtext--second">
              {t("aboutMe.hero.headlineEndLine2")}
            </span>
          </h1>
        </div>
      </section>

      {/* About Me Section with Stats */}
      <section className="about-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ "--card-color": stat.color }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-cards">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="services-info">
            <h2 className="services-heading">
              {t("aboutMe.services.heading")}
            </h2>
            <p className="services-text">{t("aboutMe.services.text")}</p>

            <div className="profile-mini">
              <img
                src={profile}
                alt={t("aboutMe.fullStackDeveloper")}
                className="profile-mini-image"
              />
              <div className="profile-mini-info">
                <div className="profile-mini-name">Yessica Maitia</div>
                <div className="profile-mini-role">
                  {t("aboutMe.services.profileRole")}
                </div>
              </div>
            </div>

            <div className="achievements">
              <div className="achievement-item">
                <div className="achievement-value">+30</div>
                <div className="achievement-label">
                  {t("aboutMe.services.projectsDelivered")}
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-value">100%</div>
                <div className="achievement-label">
                  {t("aboutMe.services.clientSatisfaction")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Highlight Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="quote-icon">&ldquo;</div>
          <h3 className="testimonial-name">{t("aboutMe.testimonial.title")}</h3>
          <p className="testimonial-role">{t("aboutMe.testimonial.role")}</p>
          <p className="testimonial-text">{t("aboutMe.testimonial.text")}</p>
          <div className="testimonial-avatar">
            <img
              src={profile}
              alt={t("aboutMe.testimonial.title")}
              className="testimonial-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

AboutMe.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default AboutMe;
