import { useTranslation } from "react-i18next";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import { CASE_STUDIES, getCaseStudy } from "../data/caseStudies";
import "../views/design.css";

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

  return (
    <article className="case">
      <header className="page-header case__header">
        <div className="wrap">
          <Link to="/design" className="text-link case__back">
            <FiArrowLeft /> {labels.back}
          </Link>
          <p className="eyebrow">{labels.eyebrow}</p>
          <h1 className="page-title">{c.title}</h1>
          <p className="page-lede">{c.tagline}</p>
          <dl className="case__meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          <a href={study.url} target="_blank" rel="noopener noreferrer" className="btn btn--ghost case__visit">
            {labels.visit} {study.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} <FiArrowUpRight />
          </a>
        </div>
      </header>

      <div className="wrap">
        <figure className="case__cover">
          <img src={study.cover} alt={c.title} width={1568} height={772} />
        </figure>
      </div>

      <section className="section section--tight">
        <div className="wrap case__story">
          {[
            ["01", labels.problem, c.problem],
            ["02", labels.design, c.design],
            ["03", labels.result, c.result],
          ].map(([num, title, text]) => (
            <div className="case__block" key={num}>
              <span className="dprinciple__num">{num}</span>
              <h2 className="case__block-title">{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {decisions.length > 0 && (
        <section className="section section--alt">
          <div className="wrap">
            <h2 className="section-title">{labels.decisions}</h2>
            <ol className="dprinciples case__decisions">
              {decisions.map((d, i) => (
                <li className="dprinciple" key={d.title}>
                  <span className="dprinciple__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="dprinciple__title">{d.title}</h3>
                  <p className="dprinciple__text">{d.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="wrap case__gallery">
          {study.gallery.map((src, i) => (
            <figure className="case__shot" key={src}>
              <img src={src} alt={captions[i] || `${c.title} ${i + 1}`} loading="lazy" decoding="async" />
              {captions[i] && <figcaption>{captions[i]}</figcaption>}
            </figure>
          ))}
        </div>
      </section>

      {c.extra && (
        <section className="section section--tight" style={{ paddingTop: 0 }}>
          <div className="wrap case__story">
            <div className="case__block case__block--wide">
              <h2 className="case__block-title">{c.extraTitle}</h2>
              <p>{c.extra}</p>
            </div>
          </div>
        </section>
      )}

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="case__block-title">{labels.role}</h2>
          <p className="case__role">{c.role}</p>
          <ul className="case__stack">
            {study.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap case__next">
          <span className="eyebrow">{labels.next}</span>
          <Link to={`/design/${next.slug}`} className="case__next-link">
            <span className="section-title">{nextText.title}</span>
            <span className="section-sub">{nextText.tagline}</span>
            <span className="text-link">
              {labels.read} <FiArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default CaseStudy;
