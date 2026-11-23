import { useTranslation } from "react-i18next";
import { FiArrowRight, FiCode, FiCpu, FiLayers, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import portrait from "../images/profile3.jpeg";
import "../views/AboutMe.css";

const AboutMe = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "5+", label: t("aboutMe.stats.yearsExperience") },
    { value: "30+", label: t("aboutMe.stats.projectsCompleted") },
    { value: "300+", label: t("aboutMe.stats.happyClients") },
  ];

  const services = [
    { key: "webDev", icon: <FiCode /> },
    { key: "fullStackDev", icon: <FiLayers /> },
    { key: "aiEngineering", icon: <FiCpu /> },
    { key: "mentoring", icon: <FiUsers /> },
  ];

  return (
    <>
      <section className="about-hero">
        <div className="wrap about-hero__grid">
          <div>
            <p className="eyebrow">{t("ui.aboutTitle")}</p>
            <h1 className="page-title">
              {t("aboutMe.hero.headlineStart")} Yessica.
            </h1>
            <p className="page-lede">{t("aboutMe.hero.headlineEndLine1")}</p>
            <div className="about-prose">
              <p>
                {t("aboutMe.description")} {t("aboutMe.description2")}
              </p>
              <p>{t("aboutMe.journey")}</p>
              <p>{t("aboutMe.journey2")}</p>
            </div>
          </div>
          <figure className="about-photo">
            <img src={portrait} alt="Yessica Maitia" width={480} height={600} />
          </figure>
        </div>
      </section>

      <section className="wrap">
        <dl className="about-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="wrap about-services">
          <div className="about-services__intro">
            <h2 className="section-title">{t("aboutMe.services.heading")}</h2>
            <p>{t("aboutMe.services.text")}</p>
            <Link to="/contact" className="text-link">
              {t("homePage.hero.ctaPrimary")} <FiArrowRight />
            </Link>
          </div>
          <ul className="about-services__list">
            {services.map((s) => (
              <li key={s.key}>
                <span className="about-services__icon">{s.icon}</span>
                <div>
                  <h3>{t(`aboutMe.services.${s.key}.title`)}</h3>
                  <p>{t(`aboutMe.services.${s.key}.description`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
