import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FEATURED_KEYS, localizeProject, ONIX_URL, PROJECTS } from "../data/projects";
import portrait from "../images/profile2.jpeg";
import "../views/home.css";
import "../views/projects.css";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ReviewText = ({ text = "" }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const long = text.length > 420;
  return (
    <>
      <blockquote className={`review__text${long && !open ? " review__text--clamped" : ""}`}>{text}</blockquote>
      {long && (
        <button type="button" className="review__more" onClick={() => setOpen((o) => !o)}>
          {open ? t("ui.showLess") : t("ui.readMore")}
        </button>
      )}
    </>
  );
};

ReviewText.propTypes = { text: PropTypes.string };

const initials = (first = "", last = "") => `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();

const Home = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [allReviews, setAllReviews] = useState(false);

  const hero = t("homePage.hero", { returnObjects: true }) || {};
  const quote = t("homePage.quoteBand.quote");
  const reviews = t("homeReviews", { returnObjects: true }) || {};
  const reviewItems = Array.isArray(reviews.items) ? reviews.items : [];

  const featured = useMemo(
    () =>
      FEATURED_KEYS.map((k) => PROJECTS.find((p) => p.key === k))
        .filter(Boolean)
        .map((p) => localizeProject(p, t)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              {t("ui.role")} · {t("ui.tagline")}
            </p>
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__lede">{hero.subtitle}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                {hero.ctaPrimary} <FiArrowRight />
              </Link>
              <Link to="/projects" className="btn btn--ghost">
                {t("ui.seeProjects")}
              </Link>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>5+</dt>
                <dd>{t("ui.yearsExp")}</dd>
              </div>
              <div>
                <dt>30+</dt>
                <dd>{t("ui.projectsShipped")}</dd>
              </div>
              <div>
                <dt>
                  <a href={ONIX_URL} target="_blank" rel="noopener noreferrer" className="hero__onix">
                    Onix <FiArrowUpRight />
                  </a>
                </dt>
                <dd>{t("ui.onixLink")}</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__photo">
            <img src={portrait} alt="Yessica Maitia" width={520} height={520} />
          </figure>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">{t("ui.selectedWork")}</h2>
            <Link to="/projects" className="text-link">
              {t("ui.allProjects")} <FiArrowRight />
            </Link>
          </div>
          <div className="pgrid">
            {featured.map((p) => (
              <ProjectCard key={p.key} project={p} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {quote && (
        <section className="section quote">
          <div className="wrap">
            <blockquote className="quote__text">{quote}</blockquote>
          </div>
        </section>
      )}

      {reviewItems.length > 0 && (
        <section className="section section--alt">
          <div className="wrap">
            <div className="section-head section-head--stack">
              <h2 className="section-title">{reviews.title || t("ui.reviewsTitle")}</h2>
              {reviews.subtitle && <p className="section-sub">{reviews.subtitle}</p>}
            </div>
            <div className="reviews">
              {(allReviews ? reviewItems : reviewItems.slice(0, 6)).map((item, i) => (
                <figure className="review" key={`${item.firstName}-${i}`}>
                  <ReviewText text={item.message} />
                  <figcaption className="review__who">
                    <span className="review__avatar" aria-hidden>
                      {initials(item.firstName, item.lastName)}
                    </span>
                    <span>
                      <span className="review__name">
                        {`${item.firstName} ${item.lastName}`.trim()}
                      </span>
                      <span className="review__company">{item.company}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            {!allReviews && reviewItems.length > 6 && (
              <div className="reviews__more">
                <button type="button" className="btn btn--ghost" onClick={() => setAllReviews(true)}>
                  {t("ui.showAllReviews")} ({reviewItems.length})
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      <ProjectDetailsModal data={selected} onHide={() => setSelected(null)} />
    </>
  );
};

export default Home;
