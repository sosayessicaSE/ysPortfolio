import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "../views/cta.css";

/** Closing call to action shown above the footer on every page except Contact. */
const CtaBand = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <section className="cta">
      <div className="wrap cta__inner">
        <div>
          <h2 className="cta__title">{t("ui.ctaTitle")}</h2>
          <p className="cta__text">{t("ui.ctaText")}</p>
        </div>
        <Link to="/contact" className="btn btn--primary cta__btn">
          {t("homePage.hero.ctaPrimary")} <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default CtaBand;
