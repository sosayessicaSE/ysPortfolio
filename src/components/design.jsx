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

/** Projects shown on the design page, in order. */
const DESIGN_KEYS = [
  "cultiva",
  "cria",
  "wewash",
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

  const projects = useMemo(
    () =>
      DESIGN_KEYS.map((k) => PROJECTS.find((p) => p.key === k))
        .filter(Boolean)
        .map((p) => {
          const localized = localizeProject(p, t);
          return focus[p.key] ? { ...localized, summary: focus[p.key] } : localized;
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return (
    <>
      <header className="page-header">
        <div className="wrap">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="page-title">{page.title}</h1>
          <p className="page-lede">{page.lede}</p>
        </div>
      </header>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="section-title">{page.casesTitle}</h2>
          <div className="dcases">
            {CASE_STUDIES.map((c) => {
              const text = t(`caseStudies.${c.slug}`, { returnObjects: true }) || {};
              return (
                <Link to={`/design/${c.slug}`} className="dcase" key={c.slug}>
                  <span className="dcase__media">
                    <img src={c.cover} alt="" loading="lazy" decoding="async" width={1568} height={772} />
                  </span>
                  <span className="dcase__body">
                    <span className="pcard__meta">{text.kind}</span>
                    <span className="dcase__title">{text.title}</span>
                    <span className="pcard__summary">{text.tagline}</span>
                    <span className="text-link">
                      {page.readCase} <FiArrowRight />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {principles.length > 0 && (
        <section className="section section--tight design-principles" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2 className="section-title">{page.principlesTitle}</h2>
            <ol className="dprinciples">
              {principles.map((p, i) => (
                <li className="dprinciple" key={p.title}>
                  <span className="dprinciple__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="dprinciple__title">{p.title}</h3>
                  <p className="dprinciple__text">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title">{page.workTitle}</h2>
          </div>
          <div className="pgrid">
            {projects.map((p) => (
              <ProjectCard key={p.key} project={p} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap design-cta">
          <h2 className="section-title">{page.ctaTitle}</h2>
          <p className="section-sub">{page.ctaText}</p>
          <div className="design-cta__actions">
            <Link to="/contact" className="btn btn--primary">
              {page.ctaButton} <FiArrowRight />
            </Link>
            <Link to="/projects" className="btn btn--ghost">
              {t("ui.allProjects")}
            </Link>
          </div>
        </div>
      </section>

      <ProjectDetailsModal data={selected} onHide={() => setSelected(null)} />
    </>
  );
};

export default Design;
