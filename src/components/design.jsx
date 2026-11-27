import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../data/caseStudies";
import { localizeProject, PROJECTS } from "../data/projects";
import "../views/projects.css";
import "../views/design.css";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";

/** Other projects shown under the case studies, in order. */
const MORE_KEYS = [
  "onix",
  "splitSquids",
  "safeHalt",
  "websiteSprint",
  "globalpassport",
  "lavanderiadaserras",
  "dreamDoctor",
  "sunrise",
  "venusSd",
];

const Design = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);

  const page = t("designPage", { returnObjects: true }) || {};
  const principles = Array.isArray(page.principles) ? page.principles : [];
  const focus = page.focus || {};

  const more = useMemo(
    () =>
      MORE_KEYS.map((k) => PROJECTS.find((p) => p.key === k))
        .filter(Boolean)
        .map((p) => {
          const localized = localizeProject(p, t);
          return focus[p.key] ? { ...localized, summary: focus[p.key] } : localized;
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return (
    <div className="dpage">
      <header className="dhero">
        <div className="wrap">
          <h1 className="dhero__title">{page.heroTitle}</h1>
          <div className="dhero__row">
            <p className="dhero__lede">{page.lede}</p>
            <ul className="dhero__index" aria-label={page.casesTitle}>
              {CASE_STUDIES.map((c) => {
                const text = t(`caseStudies.${c.slug}`, { returnObjects: true }) || {};
                return (
                  <li key={c.slug}>
                    <Link to={`/design/${c.slug}`} style={{ "--swatch": c.theme.accent }}>
                      <span className="dhero__swatch" aria-hidden />
                      <span className="dhero__name">{text.title}</span>
                      <span className="dhero__kind">{text.short}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>

      {CASE_STUDIES.map((c, i) => {
        const text = t(`caseStudies.${c.slug}`, { returnObjects: true }) || {};
        const meta = Array.isArray(text.meta) ? text.meta.slice(0, 3) : [];
        return (
          <section
            key={c.slug}
            className={`dchapter${i % 2 ? " dchapter--flip" : ""}`}
            style={{ "--c-bg": c.theme.bg, "--c-ink": c.theme.ink, "--c-accent": c.theme.accent }}
          >
            <div className="wrap dchapter__grid">
              <div className="dchapter__copy">
                <h2 className="dchapter__title">{text.title}</h2>
                <p className="dchapter__tagline">{text.tagline}</p>
                <dl className="dchapter__facts">
                  {meta.map((m) => (
                    <div key={m.label}>
                      <dt>{m.label}</dt>
                      <dd>{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link to={`/design/${c.slug}`} className="dchapter__cta">
                  {page.readCase}
                  <FiArrowRight aria-hidden />
                </Link>
              </div>
              <Link to={`/design/${c.slug}`} className="dchapter__media" tabIndex={-1} aria-hidden>
                <img
                  className="dchapter__cover"
                  src={c.cover}
                  alt=""
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width={1568}
                  height={772}
                />
                {c.inset && <img className="dchapter__inset" src={c.inset} alt="" loading="lazy" decoding="async" />}
              </Link>
            </div>
          </section>
        );
      })}

      {principles.length > 0 && (
        <section className="dprinciples-wrap">
          <div className="wrap dprinciples-grid">
            <h2 className="dsection-title">{page.principlesTitle}</h2>
            <dl className="dprinciples">
              {principles.map((p) => (
                <div className="dprinciple" key={p.title}>
                  <dt>{p.title}</dt>
                  <dd>{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="dmore">
        <div className="wrap">
          <h2 className="dsection-title">{page.workTitle}</h2>
          <div className="pgrid dmore__grid">
            {more.map((p) => (
              <ProjectCard key={p.key} project={p} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <section className="dcta">
        <div className="wrap dcta__inner">
          <h2 className="dcta__title">{page.ctaTitle}</h2>
          <p className="dcta__text">{page.ctaText}</p>
          <div className="dcta__actions">
            <Link to="/contact" className="btn btn--primary">
              {page.ctaButton}
            </Link>
            <Link to="/projects" className="btn btn--ghost">
              {t("ui.allProjects")}
            </Link>
          </div>
        </div>
      </section>

      <ProjectDetailsModal data={selected} onHide={() => setSelected(null)} />
    </div>
  );
};

export default Design;
