import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { HiFolder, HiBriefcase, HiUser } from 'react-icons/hi';
import "../views/home.css";

const Home = ({ isDarkMode }) => {
  const { t } = useTranslation();

  const cards = [
    { to: '/projects', label: t('projects'), icon: HiFolder },
    { to: '/experience', label: t('experienceNav'), icon: HiBriefcase },
    { to: '/aboutme', label: t('aboutme'), icon: HiUser },
  ];

  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <section className={`home-cards ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        {cards.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`home-card ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
          >
            <span className="home-card-icon" aria-hidden>
              <Icon />
            </span>
            <h2 className="home-card-title">{label}</h2>
          </Link>
        ))}
      </section>
    </div>
  );
};

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Home;
