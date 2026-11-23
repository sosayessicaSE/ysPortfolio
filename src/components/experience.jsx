import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import { ONIX_URL } from "../data/projects";
import alorica from "../images/alorica.jpg";
import applica from "../images/applica.png";
import ctmeeting from "../images/ctmeeting.jpg";
import ecommerce from "../images/ecommerce.jpg";
import kw1 from "../images/kw1.jpg";
import palco from "../images/palco.jpg";
import profile4 from "../images/profile4.jpg";
import keller from "../images/sede2.jpg";
import setup from "../images/setup.jpg";
import travel from "../images/travel.jpg";
import "../views/experience.css";

const ROLES = [
  { key: "csg" },
  { key: "applicaCorp" },
  { key: "sup" },
  { key: "codingTemple" },
  { key: "onix", url: ONIX_URL },
  { key: "alorica" },
  { key: "venusSdTeacher" },
  { key: "kellerWilliams" },
  { key: "bigPawGames" },
];

const PHOTOS = [
  { src: profile4, alt: "Venus SD" },
  { src: ctmeeting, alt: "Coding Temple" },
  { src: applica, alt: "Applica Corp" },
  { src: palco, alt: "Onix" },
  { src: setup, alt: "Workspace" },
  { src: alorica, alt: "Alorica" },
  { src: keller, alt: "Keller Williams" },
  { src: travel, alt: "Onix" },
  { src: kw1, alt: "Keller Williams" },
  { src: ecommerce, alt: "Onix" },
];

const toTitle = (s = "") =>
  s === s.toUpperCase() && s.length > 3
    ? s
        .split(" ")
        .map((w) => (w.length <= 3 ? w : w.charAt(0) + w.slice(1).toLowerCase()))
        .join(" ")
    : s;

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="page-header">
        <div className="wrap">
          <h1 className="page-title">{toTitle(t("experience.title"))}</h1>
          <p className="page-lede">{t("ui.experienceLede")}</p>
        </div>
      </header>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ol className="timeline">
            {ROLES.map(({ key, url }) => {
              const company = toTitle(t(`experience.${key}.company`));
              return (
                <li className="timeline__item" key={key}>
                  <div className="timeline__when">
                    <span>{t(`experience.${key}.years`)}</span>
                    <span className="timeline__where">{t(`experience.${key}.location`)}</span>
                  </div>
                  <div className="timeline__what">
                    <h2 className="timeline__role">{t(`experience.${key}.position`)}</h2>
                    <p className="timeline__company">
                      {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {company} <FiArrowUpRight />
                        </a>
                      ) : (
                        company
                      )}
                    </p>
                    <p className="timeline__desc">{t(`experience.${key}.description`)}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">{t("ui.moments")}</h2>
          </div>
          <div className="moments">
            {PHOTOS.map((p, i) => (
              <figure className="moments__item" key={i}>
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
                <figcaption>{p.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
