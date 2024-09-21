import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../views/home.css";
import empresa from "../images/empresa.png";
import emprendimiento from "../images/emprendimiento.png";
import individuo from "../images/individuo.png";

const Home = ({ isDarkMode }) => {
  const { t } = useTranslation(); 

  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      
      <section className={`gallery-section ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className={`gallery-item ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
          <Link to="/projects">
            <img src={empresa} alt={t('projects')} />
            <h2>{t('projects')}</h2>
          </Link>
        </div>
        
        <div className={`gallery-item ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
          <Link to="/experience">
            <img src={emprendimiento} alt={t('experience.title')} />
            <h2>{t('experience.title')}</h2>
          </Link>
        </div>
        <div className={`gallery-item ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
          <Link to="/aboutme">
            <img src={individuo} alt={t('aboutme')} />
            <h2>{t('aboutme')}</h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
