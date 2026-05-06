import PropTypes from 'prop-types';
import { useEffect, useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import '../views/Navbar.css';

const MOBILE_NAV_QUERY = '(max-width: 768px)';

const Navbar = ({ themeClass }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_QUERY);
    const sync = () => setMobileNav(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!mobileNav) setMenuOpen(false);
  }, [mobileNav]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const menuActive = menuOpen && mobileNav;

  useEffect(() => {
    if (!menuActive) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuActive]);

  useEffect(() => {
    if (!menuActive) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuActive]);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <>
      <li>
        <Link to="/" onClick={closeMenu}>
          {t('home')}
        </Link>
      </li>
      <li>
        <Link to="/aboutme" onClick={closeMenu}>
          {t('aboutme')}
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={closeMenu}>
          {t('projects')}
        </Link>
      </li>
      <li>
        <Link to="/experience" onClick={closeMenu}>
          {t('experienceNav')}
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={closeMenu}>
          {t('contactNav')}
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar ${themeClass}${menuActive ? ' navbar--menu-open' : ''}`}
    >
      {menuActive && (
        <button
          type="button"
          className="navbar-backdrop"
          aria-label={t('navCloseMenu')}
          onClick={closeMenu}
        />
      )}
      <nav className="navbar-nav" aria-label="Main">
        <button
          type="button"
          className="navbar-burger"
          aria-expanded={menuActive}
          aria-controls={menuId}
          aria-label={menuOpen ? t('navCloseMenu') : t('navOpenMenu')}
          onClick={toggleMenu}
        >
          <span className="navbar-burger-bar" aria-hidden />
          <span className="navbar-burger-bar" aria-hidden />
          <span className="navbar-burger-bar" aria-hidden />
        </button>

        <div
          id={menuId}
          className={`navbar-mobile-panel${menuActive ? ' is-open' : ''}`}
          aria-hidden={mobileNav ? !menuActive : undefined}
          {...(mobileNav && !menuOpen ? { inert: '' } : {})}
        >
          <ul className="menuList">{navLinks}</ul>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  themeClass: PropTypes.string.isRequired,
};

export default Navbar;
