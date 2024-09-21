import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import language from '../images/language.png';
import '../views/LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  if (!i18n.language) {
    i18n.changeLanguage('en');
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="language-selector">
      <button onClick={toggleMenu} className="globe-btn">
        <img src={language} alt="" className='globe-img'/>
      </button>
      {isOpen && (
        <div className="language-menu">
          <button onClick={() => changeLanguage('es')} className="lang-option">Español</button>
          <button onClick={() => changeLanguage('en')} className="lang-option">English</button>
          <button onClick={() => changeLanguage('pt')} className="lang-option">Português</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
