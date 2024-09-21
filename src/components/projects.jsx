import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import '../views/projects.css';
// Importing images
import onix1 from '../images/projects/onix1.png';
import onix2 from '../images/projects/onix2.png';
import onix3 from '../images/projects/onix3.png';
import sunrise1 from '../images/projects/sunrise1.png';
import sunrise2 from '../images/projects/sunrise2.png';
import sunrise3 from '../images/projects/sunrise3.png';
import cb1 from '../images/projects/cb1.png';
import venus1 from '../images/projects/venus1.png';
import venus2 from '../images/projects/venus2.png';
import venus3 from '../images/projects/venus3.png';
import venus4 from '../images/projects/venus4.png';
import figuritas1 from '../images/projects/figuritas1.png';
import figuritas2 from '../images/projects/figuritas2.png';
import figuritas3 from '../images/projects/figuritas3.png';
import figuritas4 from '../images/projects/figuritas4.png';
import figuritas5 from '../images/projects/figuritas5.png';
import portfolio1 from '../images/projects/portfolio1.png';
import portfolio2 from '../images/projects/portfolio2.png';
import portfolio3 from '../images/projects/portfolio3.png';

// Importing translations
import { useTranslation } from 'react-i18next';

const Projects = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projectsData = [
    {
      title: "Onix",
      images: [onix2, onix1, onix3],
      startDate: "2024",
      description: t('projectsData.onix.description'),
      url: "https://www.solutionsonix.com",
      technologies: [{ class: "fab fa-react" }, { class: "fab fa-node" }],
    },
    {
      title: "Sunrise Real Estate",
      images: [sunrise1, sunrise2, sunrise3],
      startDate: "2024",
      description: t('projectsData.sunrise.description'),
      url: "https://sosayessicase.github.io/Sunrise/",
      technologies: [{ class: "fab fa-react" }, { class: "fab fa-node" }],
    },
    {
      title: "Coding Bot",
      images: [cb1],
      startDate: "2024",
      description: t('projectsData.codingBot.description'),
      technologies: [{ class: "fab fa-react" }, { class: "fab fa-python" }],
    },
    {
      title: "Venus SD",
      images: [venus1, venus2, venus3, venus4],
      startDate: "2022",
      description: t('projectsData.venusSd.description'),
      url: "https://sosayessicase.github.io/Servicios-Digitales/",
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
      description: t('projectsData.qatarCollection.description'),
      url: "https://coleccionqatar.onrender.com/",
      technologies: [{ class: "fab fa-js" }, { class: "fab fa-css3" }],
    },
    {
      title: t('projectsData.portfolioTemplate.title'),
      images: [portfolio1, portfolio2, portfolio3],
      startDate: "2024",
      description: t('projectsData.portfolioTemplate.description'),
      url: "https://sosayessicase.github.io/Portfoliohosted",
      technologies: [
        { class: "fab fa-react" },
        { class: "fab fa-js" },
        { class: "fab fa-css3" },
      ],
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
    <section id="portfolio" className={`gallery ${isDarkMode ? "dark-mode" : ""}`}>
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
      />
      <h1 className="more-projects-link">
        <a
          href="https://github.com/sosayessicaSE?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
           {t('moreProjects')} 
        </a>
      </h1>
    </section>
  );
};

export default Projects;
