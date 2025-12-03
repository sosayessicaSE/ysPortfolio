import { useState } from "react";
import "../views/projects.css";
import ProjectDetailsModal from "./ProjectDetailsModal";
// Importing images
import cb1 from "../images/projects/cb1.png";
import coding_temple1 from "../images/projects/ct_1.png";
import coding_temple2 from "../images/projects/ct_2.png";
import coding_temple3 from "../images/projects/ct_3.png";
import coding_temple4 from "../images/projects/ct_4.png";
import coding_temple5 from "../images/projects/ct_5.png";
import coding_temple6 from "../images/projects/ct_6.png";
import ds1 from "../images/projects/ds_1.png";
import ds2 from "../images/projects/ds_2.png";
import ds3 from "../images/projects/ds_3.png";
import ds4 from "../images/projects/ds_4.png";
import figuritas1 from "../images/projects/figuritas1.png";
import figuritas2 from "../images/projects/figuritas2.png";
import figuritas3 from "../images/projects/figuritas3.png";
import figuritas4 from "../images/projects/figuritas4.png";
import figuritas5 from "../images/projects/figuritas5.png";
import gp1 from "../images/projects/gp_1.png";
import gp2 from "../images/projects/gp_2.png";
import gp3 from "../images/projects/gp_3.png";
import gp4 from "../images/projects/gp_4.png";
import gp5 from "../images/projects/gp_5.png";
import onix1 from "../images/projects/onix1.png";
import onix2 from "../images/projects/onix2.png";
import onix3 from "../images/projects/onix3.png";
import sunrise1 from "../images/projects/sunrise1.png";
import sunrise2 from "../images/projects/sunrise2.png";
import sunrise3 from "../images/projects/sunrise3.png";
import venus1 from "../images/projects/venus1.png";
import venus2 from "../images/projects/venus2.png";
import venus3 from "../images/projects/venus3.png";
import venus4 from "../images/projects/venus4.png";
import yr1 from "../images/projects/yr_1.png";
import yr2 from "../images/projects/yr_2.png";
import yr3 from "../images/projects/yr_3.png";

// Importing translations
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Projects = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projectsData = [
    {
      title: "Global Passport",
      images: [gp1, gp2, gp3, gp4, gp5],
      startDate: "2025",
      description: t("projectsData.globalpassport.description"),
      url: "https://globalpassport.ai/",
      color: "#00d4ff",
      technologies: [
        { class: "fab fa-react" },
        { class: "fab fa-node" },
        { class: "fab fa-aws" },
        { class: "fab fa-database" },
        { class: "fab fa-figma" },
      ],
    },
    {
      title: "Coding Temple",
      images: [
        coding_temple1,
        coding_temple2,
        coding_temple3,
        coding_temple4,
        coding_temple5,
        coding_temple6,
      ],
      startDate: "2023",
      description: t("projectsData.codingtemple.description"),
      url: "https://www.codingtemple.com/",
      color: "#06d6a0",
      technologies: [
        { class: "fab fa-react" },
        { class: "fab fa-node" },
        { class: "fab fa-flask" },
        { class: "fab fa-database" },
      ],
    },
    {
      title: "YouRewards",
      images: [yr1, yr2, yr3],
      startDate: "2025",
      description: t("projectsData.yr.description"),
      url: "",
      color: "#ff6b35",
      technologies: [
        { class: "fab fa-react" },
        { class: "fab fa-node" },
        { class: "fab fa-flask" },
        { class: "fab fa-database" },
      ],
    },

    {
      title: "Das Serras",
      images: [ds1, ds2, ds3, ds4],
      startDate: "2025",
      description: t("projectsData.lavanderiadaserras.description"),
      url: "https://www.lavanderiadaserras.com/",
      color: "#00d4ff",
      technologies: [
        { class: "fab fa-react" },
        { class: "fab fa-node" },
        { class: "fab fa-flask" },
        { class: "fab fa-database" },
      ],
    },

    {
      title: "Onix",
      images: [onix2, onix1, onix3],
      startDate: "2024",
      description: t("projectsData.onix.description"),
      url: "https://www.solutionsonix.com",
      color: "#ffd60a",
      technologies: [{ class: "fab fa-react" }, { class: "fab fa-node" }],
    },
    {
      title: "Sunrise Real Estate",
      images: [sunrise1, sunrise2, sunrise3],
      startDate: "2024",
      description: t("projectsData.sunrise.description"),
      url: "https://sosayessicase.github.io/Sunrise/",
      color: "#ffffff",
      technologies: [{ class: "fab fa-react" }, { class: "fab fa-node" }],
    },
    {
      title: "Coding Bot",
      images: [cb1],
      startDate: "2024",
      description: t("projectsData.codingBot.description"),
      color: "#4cc9f0",
      technologies: [{ class: "fab fa-react" }, { class: "fab fa-python" }],
    },
    {
      title: "Venus SD",
      images: [venus1, venus2, venus3, venus4],
      startDate: "2022",
      description: t("projectsData.venusSd.description"),
      url: "https://sosayessicase.github.io/Servicios-Digitales/",
      color: "#ffffff",
      technologies: [
        { class: "fab fa-html5" },
        { class: "fab fa-js" },
        { class: "fab fa-css3" },
      ],
    },
    {
      title: "Qatar Collection",
      images: [figuritas1, figuritas2, figuritas3, figuritas4, figuritas5],
      startDate: "2022",
      description: t("projectsData.qatarCollection.description"),
      url: "https://coleccionqatar.onrender.com/",
      color: "#e63946",
      technologies: [{ class: "fab fa-js" }, { class: "fab fa-css3" }],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setDetailsModalShow(true);
  };

  const closeModal = () => {
    setDetailsModalShow(false);
  };

  return (
    <section
      id="portfolio"
      className={`gallery ${isDarkMode ? "dark-mode" : ""}`}
    >
      <div className="gallery-container">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className={`gallery-item-projects ${isDarkMode ? "dark-mode" : ""}`}
            onClick={() => openModal(project)}
          >
            <img
              src={project.images[0]}
              alt={`${project.title} image`}
              className="gallery-image-projects"
            />
            <p className="gallery-item-title">{project.title}</p>
          </div>
        ))}
      </div>
      <ProjectDetailsModal
        show={detailsModalShow}
        onHide={closeModal}
        data={selectedProject}
        isDarkMode={isDarkMode}
      />
     
    </section>
  );
};

export default Projects;
