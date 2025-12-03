import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import { Link } from 'react-router-dom';
import '../views/Navbar.css';
import Book from './book';
import LanguageSelector from './languageSelector';

const Navbar = ({ themeClass }) => {
  const { t } = useTranslation(); // Inicializa useTranslation

  return (
    <div className={`navbar ${themeClass}`}>
      <nav>
        <ul className="menuList">
          <li>
            <Link to="/">{t('home')}</Link>
          </li>
          <li>
            <Link to="/aboutme">{t('aboutme')}</Link>
          </li>
          <li>
            <Link to="/projects">{t('projects')}</Link>
          </li>
          <li>
            <Link to="/experience">{t('experienceNav')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('contactNav')}</Link>
          </li> 
        </ul>
     
        <div id='language'>
          <LanguageSelector /> 
        </div>
        <div id='book'>
          <Book/>
        </div>
      
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  themeClass: PropTypes.string.isRequired
};

export default Navbar;
