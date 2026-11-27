import { useTranslation } from "react-i18next";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import { CASE_STUDIES, getCaseStudy } from "../data/caseStudies";
import "../views/design.css";

const themeVars = (theme, prefix) => ({
  [`--${prefix}-bg`]: theme.bg,
  [`--${prefix}-ink`]: theme.ink,
  [`--${prefix}-accent`]: theme.accent,
});

const CaseStudy = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const study = getCaseStudy(slug);

  if (!study) return <Navigate to="/design" replace />;

  const c = t(`caseStudies.${slug}`, { returnObjects: true }) || {};
  const labels = t("caseStudyUi", { returnObjects: true }) || {};
  const meta = Array.isArray(c.meta) ? c.meta : [];
  const decisions = Array.isArray(c.decisions) ? c.decisions : [];
  const captions = Array.isArray(c.captions) ? c.captions : [];

  const index = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];
  const nextText = t(`caseStudies.${next.slug}`, { returnObjects: true }) || {};
  const host = study.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  const story = [
    [labels.problem, c.problem],
    [labels.design, c.design],
    [labels.result, c.result],
  ];

  return (
    <article className="case" style={themeVars(study.theme, "c")}>
      <header className="case__band">
        <div className="wrap">
          <Link to="/design" className="case__back">
            <FiArrowLeft aria-hidden /> {labels.back}
          </Link>
          <h1 className="case__title">{c.title}</h1>
          <p className="case__tagline">{c.tagline}</p>
          <dl className="case__meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          <a href={study.url} target="_blank" rel="noopener noreferrer" className="case__visit">
            {labels.visit} {host} <FiArrowUpRight aria-hidden />
          </a>
          <figure className="case__cover">
            <img src={study.cover} alt={c.title} width={1568} height={772} />
          </figure>
        </div>
      </header>

      <section className="case__story">
        <div className="wrap">
          {story.map(([title, text]) => (
            <div className="case__story-grid" key={title}>
              <h2 className="case__h">{title}</h2>
              <p className="case__p">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {decisions.length > 0 && (
        <section className="case__decisions">
          <div className="wrap">
            <h2 className="dsection-title">{labels.decisions}</h2>
            <dl className="case__decisions-list">
              {decisions.map((d) => (
                <div className="case__decision" key={d.title}>
                  <dt>{d.title}</dt>
                  <dd>{d.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="wrap case__gallery">
        {study.gallery.map((src, i) => (
          <figure className="case__shot" key={src}>
            <img src={src} alt={captions[i] || `${c.title} ${i + 1}`} loading="lazy" decoding="async" />
            {captions[i] && <figcaption>{captions[i]}</figcaption>}
          </figure>
        ))}
      </section>

      {c.platformTitle && (
        <section className="case__platform">
          <div className="wrap">
            <div className="case__story-grid">
              <h2 className="case__h case__h--lg">{c.platformTitle}</h2>
              <p className="case__p">{c.platformIntro}</p>
            </div>
            <dl className="case__decisions-list case__platform-list">
              {(Array.isArray(c.platformPoints) ? c.platformPoints : []).map((d) => (
                <div className="case__decision" key={d.title}>
                  <dt>{d.title}</dt>
                  <dd>{d.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="case__role">
        <div className="wrap case__story-grid">
          <h2 className="case__h">{labels.role}</h2>
          <div>
            <p className="case__p">{c.role}</p>
            <ul className="case__stack">
              {study.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link to={`/design/${next.slug}`} className="case__next" style={themeVars(next.theme, "n")}>
        <span className="wrap" style={{ display: "block" }}>
          <span className="case__next-label">{labels.next}</span>
          <span className="case__next-title">
            {nextText.title} <FiArrowRight aria-hidden />
          </span>
          <span className="case__next-tagline" style={{ display: "block" }}>
            {nextText.tagline}
          </span>
        </span>
      </Link>
    </article>
  );
};

export default CaseStudy;
