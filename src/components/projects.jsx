import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { localizeProject, PROJECTS } from "../data/projects";
import "../views/projects.css";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projects = useMemo(() => PROJECTS.map((p) => localizeProject(p, t)), [i18n.language]);

  const filters = [
    { id: "all", label: t("ui.filterAll"), count: projects.length },
    { id: "onix", label: t("ui.filterOnix"), count: projects.filter((p) => p.onix).length },
    { id: "own", label: t("ui.filterOwn"), count: projects.filter((p) => !p.onix).length },
  ];
  const visible = projects.filter((p) =>
    filter === "all" ? true : filter === "onix" ? p.onix : !p.onix
  );

  return (
    <>
      <header className="page-header">
        <div className="wrap">
          <h1 className="page-title">{t("ui.projectsTitle")}</h1>
          <p className="page-lede">{t("ui.projectsLede")}</p>
        </div>
      </header>
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="pfilter" role="tablist" aria-label={t("ui.projectsTitle")}>
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`pfilter__btn${filter === f.id ? " is-active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label} <span className="pfilter__count">{f.count}</span>
              </button>
            ))}
          </div>
          <div className="pgrid">
            {visible.map((p) => (
              <ProjectCard key={p.key} project={p} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </section>
      <ProjectDetailsModal data={selected} onHide={() => setSelected(null)} />
    </>
  );
};

export default Projects;
