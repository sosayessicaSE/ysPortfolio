import PropTypes from "prop-types";
import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../views/Navbar.css";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const sentinel = useRef(null);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);

  const links = [
    { to: "/", label: t("home"), end: true },
    { to: "/aboutme", label: t("aboutme") },
    { to: "/projects", label: t("projects") },
    { to: "/experience", label: t("experienceNav") },
    { to: "/contact", label: t("contactNav") },
  ];

  return (
    <>
    <div ref={sentinel} aria-hidden style={{ height: 1, marginBottom: -1 }} />
    <header className={`topbar${stuck ? " topbar--stuck" : ""}`}>
      <div className="topbar__inner">
        <Link to="/" className="topbar__brand">
          Yessica Maitia
        </Link>

        <nav
          id={menuId}
          className={`topbar__nav${open ? " is-open" : ""}`}
          aria-label="Main"
        >
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className="topbar__link">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="topbar__tools">
          <div className="lang" role="group" aria-label={t("ui.language")}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                className={`lang__btn${current === l.code ? " is-active" : ""}`}
                aria-pressed={current === l.code}
                onClick={() => i18n.changeLanguage(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t("ui.theme")}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn topbar__burger"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t("navCloseMenu") : t("navOpenMenu")}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
