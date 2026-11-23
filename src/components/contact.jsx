import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import "../views/contact.css";

const CALENDLY_URL =
  "https://calendly.com/ysosamaitia/introductory-call?hide_gdpr_banner=1&primary_color=5b45d6";

const Contact = () => {
  const { t } = useTranslation();

  const channels = [
    { label: t("ui.email"), value: "ysosamaitia@gmail.com", href: "mailto:ysosamaitia@gmail.com" },
    { label: t("ui.whatsapp"), value: "+598 98 418 611", href: "https://wa.me/59898418611", external: true },
    { label: t("ui.linkedin"), value: "in/-jessica-sosa-", href: "https://www.linkedin.com/in/-jessica-sosa-", external: true },
    { label: t("ui.github"), value: "sosayessicase", href: "https://github.com/sosayessicase", external: true },
  ];

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="contact">
      <div className="wrap contact__grid">
        <div>
          <p className="eyebrow">{t("ui.contactTitle")}</p>
          <h1 className="page-title">{t("contact.title")}</h1>
          <p className="page-lede">{t("contact.subtitle")}</p>
          <button type="button" className="btn btn--primary contact__cta" onClick={openCalendly}>
            <FiCalendar /> {t("ui.bookCall")}
          </button>
        </div>
        <ul className="channels">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="channel"
              >
                <span className="channel__label">{c.label}</span>
                <span className="channel__value">{c.value}</span>
                <FiArrowUpRight className="channel__arrow" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
