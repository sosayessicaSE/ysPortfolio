// Experience.js
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCode } from 'react-icons/ai';
import { FaChalkboardTeacher, FaChevronLeft, FaChevronRight, FaGamepad, FaServer, FaTools } from 'react-icons/fa';
import { MdOutlinePolicy, MdSupportAgent } from 'react-icons/md';
import alorica from "../images/alorica.jpg";
import applica from "../images/applica.png";
import ctmeeting from "../images/ctmeeting.jpg";
import ecommerce from "../images/ecommerce.jpg";
import kw1 from "../images/kw1.jpg";
import kw2 from "../images/kw2.jpg";
import palco from "../images/palco.jpg";
import profile2 from "../images/profile2.jpeg";
import profile4 from "../images/profile4.jpg";
import codingtemple from "../images/projects/ct_1.png";
import daserras from "../images/projects/ds_1.png";
import gp from "../images/projects/gp_3.png";
import keller from "../images/sede2.jpg";
import keller2 from "../images/sede4.jpg";
import setup from "../images/setup.jpg";
import travel from "../images/travel.jpg";
import '../views/experience.css';

const Experience = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const galleryRef = useRef(null);
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const resizeGridItem = (item) => {
      const grid = galleryRef.current;
      if (!grid) return;
      
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
      );
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
      );
      
      const img = item.querySelector('img');
      if (img && img.complete) {
        const rowSpan = Math.ceil(
          (img.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
        );
        item.style.gridRowEnd = `span ${rowSpan}`;
      }
    };

    const resizeAllGridItems = () => {
      const allItems = galleryRef.current?.querySelectorAll('.gallery-item');
      allItems?.forEach((item) => resizeGridItem(item));
    };

    const images = galleryRef.current?.querySelectorAll('.gallery-image');
    images?.forEach((img) => {
      if (img.complete) {
        resizeAllGridItems();
      } else {
        img.addEventListener('load', resizeAllGridItems);
      }
    });

    window.addEventListener('resize', resizeAllGridItems);
    
    return () => {
      window.removeEventListener('resize', resizeAllGridItems);
      images?.forEach((img) => {
        img.removeEventListener('load', resizeAllGridItems);
      });
    };
  }, []);

  // Check scroll position for button states
  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => slider.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Gallery Images Array
  const galleryImages = [
    { src: applica, alt: 'Applica Corp' },
    { src: travel, alt: 'Onix' },
    { src: ctmeeting, alt: 'Coding Temple' },
    { src: setup, alt: 'Personal' },
    { src: alorica, alt: 'Alorica' },
    { src: profile2, alt: 'Coding Temple' },
    { src: profile4, alt: 'Venus SD' },
    { src: codingtemple, alt: 'Coding Temple' },
    { src: daserras, alt: 'Das Serras' },
    { src: gp, alt: 'Global Passport' },
    { src: keller, alt: 'Keller Williams' },
    { src: keller2, alt: 'Keller Williams' },
    { src: kw1, alt: 'Keller Williams' },
    { src: kw2, alt: 'Keller Williams' },
    { src: ecommerce, alt: 'Onix' },
    { src: palco, alt: 'Onix' },
  ];

  // Experience Data Array
  const experience = [
    {
      company: t('experience.csg.company'),
      position: t('experience.csg.position'),
      years: t('experience.csg.years'),
      location: t('experience.csg.location'),
      description: t('experience.csg.description'),
      icon: <FaTools />,
    },
    {
      company: t('experience.applicaCorp.company'),
      position: t('experience.applicaCorp.position'),
      years: t('experience.applicaCorp.years'),
      location: t('experience.applicaCorp.location'),
      description: t('experience.applicaCorp.description'),
      icon: <AiOutlineCode />,
    },
    {
      company: t('experience.sup.company'),
      position: t('experience.sup.position'),
      years: t('experience.sup.years'),
      location: t('experience.sup.location'),
      description: t('experience.sup.description'),
      icon: <MdSupportAgent />,
    },
    {
      company: t('experience.codingTemple.company'),
      position: t('experience.codingTemple.position'),
      years: t('experience.codingTemple.years'),
      location: t('experience.codingTemple.location'),
      description: t('experience.codingTemple.description'),
      icon: <FaChalkboardTeacher />,
    },
    {
      company: t('experience.onix.company'),
      position: t('experience.onix.position'),
      years: t('experience.onix.years'),
      location: t('experience.onix.location'),
      description: t('experience.onix.description'),
      icon: <FaServer />,
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
      
      {/* Photo Gallery */}
      <div className="photo-gallery" ref={galleryRef}>
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <span className="gallery-alt-text">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Experience Slider */}
      <div className="experience-slider-wrapper">
        <button 
          className={`slider-nav-button left ${!canScrollLeft ? 'disabled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <FaChevronLeft />
        </button>
        <div className="experience-slider" ref={sliderRef}>
          {experience.map((exp, index) => (
            <div key={index} className={`experience-card ${isDarkMode ? 'dark-mode' : ''}`}>
              <div className="card-icon">{exp.icon}</div>
              <div className="card-content">
                <h3 className="card-company">{exp.company}</h3>
                <p className={`card-position ${isDarkMode ? 'dark-mode' : ''}`}>
                  {exp.position}
                </p>
                <p className="card-years">{exp.years}</p>
                <p className="card-location">{exp.location}</p>
                <p className="card-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button 
          className={`slider-nav-button right ${!canScrollRight ? 'disabled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
      
     
    </section>
  );
};

Experience.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Experience;
