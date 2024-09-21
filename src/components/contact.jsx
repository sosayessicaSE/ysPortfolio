import React from 'react';
import { useTranslation } from 'react-i18next';
import phoneIcon from '../images/phone.png';
import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import contactme from '../images/contactme.png';
import chat from '../images/chat.gif'
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
  linkedin: "https://www.linkedin.com/in/-yessicasosa-", 
  github: "https://github.com/sosayessicase" 
};

const Contact = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`contact ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="contact-container">
        <div className='imagecontact'>
          <img src={contactme} alt="" />
        </div>
        <div className='chat'>
          <img src={chat} alt="" />
        </div>
        <div className="contact-details">
          <div className="contact-info">
          <ContactDetail 
  icon={contactDetails.office.phone.imageUrl} 
  text={<a href={`tel:${contactDetails.office.phone.number}`} target="_blank" rel="noopener noreferrer">Whatsapp</a>}
  altText="Phone"
/>

            <ContactDetail 
              icon={contactDetails.office.email.imageUrl} 
              text={<a href={`mailto:${contactDetails.office.email.address}`}>Email</a>} 
              altText="Email"
            />
            <ContactDetail 
              icon={linkedinIcon} 
              text={<a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>} 
              altText="LinkedIn"
            />
            <ContactDetail 
              icon={githubIcon} 
              text={<a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>} 
              altText="GitHub"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactDetail = ({ icon, text, altText }) => (
  <div className="contact-detail">
    <img src={icon} alt={altText} />
    <p>{text}</p> 
  </div>
);

export default Contact;
