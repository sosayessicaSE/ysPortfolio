import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { localizeProject, PROJECTS } from "../data/projects";
import "../views/projects.css";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projects = useMemo(() => PROJECTS.map((p) => localizeProject(p, t)), [i18n.language]);

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
          <div className="pgrid">
            {projects.map((p) => (
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
