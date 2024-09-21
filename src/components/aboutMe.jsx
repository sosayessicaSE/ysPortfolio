import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../views/AboutMe.css'; 
import profile from "../images/profile.png";
import little from "../images/little.jpeg";

const AboutMe = ({ isDarkMode }) => {
  const { t } = useTranslation(); 
  const [showDescription, setShowDescription] = useState(false);
  const [showJourney, setShowJourney] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeImage2, setActiveImage2] = useState(null);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setActiveImage(activeImage === 'profile' ? null : 'profile');
  };

  const toggleJourney = () => {
    setShowJourney(!showJourney);
    setActiveImage2(activeImage2 === 'little' ? null : 'little');
  };

  return (
    <section className={`about-section ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="profile-container">
        <div 
          className={`profile-image ${activeImage === 'profile' ? 'active' : ''}`} 
          onClick={toggleDescription}
        >
          <img 
            src={profile}
            alt={t('aboutMe.fullStackDeveloper')} 
          />
        </div>
        <div 
          className={`little-image ${activeImage2 === 'little' ? 'active' : ''}`} 
          onClick={toggleJourney}
        >
          <img 
            src={little}
            alt={t('aboutMe.passionForComputers')} 
          />
        </div>
      </div>

      {showDescription && (
        <div className="about-description">
          <div className='description'>
            <p className='desc1'>{t('aboutMe.description')}</p>
            <br />
            <p>{t('aboutMe.description2')}</p>
          </div>
        </div>
      )}

      {showJourney && (
        <div className='journeydiv'>
          <p className='journey'>{t('aboutMe.journey')}</p>
          <br />
          <p className='journey2'>{t('aboutMe.journey2')}</p>
        </div>
      )}
      <div className={`code ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      </div>
    </section>
  );
};

export default AboutMe;
