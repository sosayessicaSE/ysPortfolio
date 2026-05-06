import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';
import phoneIcon from '../images/phone.png';
import "../views/contact.css";

const contactDetails = {
  office: {
    phone: {
      number: "https://wa.me/59898418611",
      imageUrl: phoneIcon
    },
    email: {
      address: "ysosamaitia@gmail.com",
      imageUrl: emailIcon
    },
  }
};

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/-jessica-sosa-", 
  github: "https://github.com/sosayessicase" 
};

const Contact = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`contact-section ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="contact-container">
        {/* Hero Header */}
        <div className="contact-hero">
          <h1 className="contact-title">{t('contact.title')}</h1>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid">
          <ContactCard 
            icon={contactDetails.office.phone.imageUrl}
            title="WhatsApp"
            link={contactDetails.office.phone.number}
            linkText="+598 98 418 611"
            external={true}
          />
          
          <ContactCard 
            icon={contactDetails.office.email.imageUrl}
            title="Email"
            link={`mailto:${contactDetails.office.email.address}`}
            linkText="ysosamaitia@gmail.com"
            external={false}
          />
          
          <ContactCard 
            icon={linkedinIcon}
            title="LinkedIn"
            link={socialLinks.linkedin}
            linkText="Connect on LinkedIn"
            external={true}
          />
          
        
        </div>

     
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, link, linkText, external }) => (
  <a 
    href={link} 
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="contact-card"
  >
    <div className="contact-card-icon">
      <img src={icon} alt={title} />
    </div>
    <h3 className="contact-card-title">{title}</h3>
    <p className="contact-card-link">{linkText}</p>
  </a>
);

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  external: PropTypes.bool.isRequired
};

export default Contact;
