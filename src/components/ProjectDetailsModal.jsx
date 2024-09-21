import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import '../views/projectsmodal.css'

const ProjectDetailsModal = ({ show, onHide, data }) => {
  if (!data || !show) return null;

  const { title = "", description = "", url = "", technologies = [], images = [] } = data;

  const tech = technologies.map((icon, i) => (
    <li className="list-inline-item mx-3" key={i}>
      <i className={icon.class} style={{ fontSize: "2rem" }}>
        <p className="text-center" style={{ fontSize: "0.8rem" }}>
          {icon.name}
        </p>
      </i>
    </li>
  ));

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const img = images.map((elem, i) => (
    <div key={i} className="slider-slide" onClick={handleClick}>
      <img src={elem} alt={`Slide ${i}`} style={{ width: "100%", height: "auto" }} />
    </div>
  ));

  return (
    <div className="modal-overlay" onClick={onHide}>
      <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onHide}>
          &times;
        </button>
        
        <AwesomeSlider className="imageProject">
          {img}
        </AwesomeSlider>
        <p className="descriptionProject">{description}</p>
        <ul className="list-inline">{tech}</ul>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
