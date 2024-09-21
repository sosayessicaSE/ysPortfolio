// Experience.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLaptopCode, FaChalkboardTeacher, FaGamepad, FaTools } from 'react-icons/fa';
import { MdOutlinePolicy } from 'react-icons/md';
import { AiOutlineCode } from 'react-icons/ai';
import '../views/experience.css';
import icode from '../images/icode.gif';

const Experience = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const experience = [
    {
      company: t('experience.codingTemple.company'),
      position: t('experience.codingTemple.position'),
      years: t('experience.codingTemple.years'),
      location: t('experience.codingTemple.location'),
      description: t('experience.codingTemple.description'),
      icon: <FaChalkboardTeacher />,
    },
    {
      company: t('experience.venusSd.company'),
      position: t('experience.venusSd.position'),
      years: t('experience.venusSd.years'),
      location: t('experience.venusSd.location'),
      description: t('experience.venusSd.description'),
      icon: <AiOutlineCode />,
    },
    {
      company: t('experience.alorica.company'),
      position: t('experience.alorica.position'),
      years: t('experience.alorica.years'),
      location: t('experience.alorica.location'),
      description: t('experience.alorica.description'),
      icon: <MdOutlinePolicy />,
    },
    {
      company: t('experience.venusSdTeacher.company'),
      position: t('experience.venusSdTeacher.position'),
      years: t('experience.venusSdTeacher.years'),
      location: t('experience.venusSdTeacher.location'),
      description: t('experience.venusSdTeacher.description'),
      icon: <FaChalkboardTeacher />,
    },
    {
      company: t('experience.kellerWilliams.company'),
      position: t('experience.kellerWilliams.position'),
      years: t('experience.kellerWilliams.years'),
      location: t('experience.kellerWilliams.location'),
      description: t('experience.kellerWilliams.description'),
      icon: <FaTools />,
    },
    {
      company: t('experience.bigPawGames.company'),
      position: t('experience.bigPawGames.position'),
      years: t('experience.bigPawGames.years'),
      location: t('experience.bigPawGames.location'),
      description: t('experience.bigPawGames.description'),
      icon: <FaGamepad />,
    },
  ];

  return (
    <section id="portfolio" className={`gallery ${isDarkMode ? 'dark-mode' : ''}`}>
       <h2 className='titleexp'>{t('experience.title')}</h2>
      <div className="timeline-container">
        {experience.map((exp, index) => (
          <div key={index} className={`timeline-item ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <h3 className="company-title">{exp.company}</h3>
              <p className={`position ${isDarkMode ? 'dark-mode' : ''}`}>{exp.position} ({exp.years})</p>
              <p className="location">{exp.location}</p>
              <p className="descriptionExp">{exp.description}</p>
            </div>
          </div>
        ))}
        <a href="https://www.linkedin.com/in/-yessicasosa-" target="_blank" rel="noopener noreferrer" className="link-icode">
          <img src={icode} alt={t('linkedinProfileAlt')} className="icode" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
