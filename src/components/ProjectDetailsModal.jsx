/* eslint-disable react/prop-types */
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../views/projectsmodal.css";

const ProjectDetailsModal = ({ show, onHide, data, isDarkMode }) => {
  if (!data || !show) return null;

  const {
    description = "",
    url = "",
    technologies = [],
    images = [],
    color = "#007bff",
  } = data;

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
      <img
        src={elem}
        alt={`Slide ${i}`}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover", // or "contain" depending on your needs
          display: "block",
          maxHeight: "500px", // adjust as needed
          borderRadius: "8px", // optional
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      />
    </div>
  ));

  return (
    <div className="modal-overlay" onClick={onHide}>
      <div
        className={`modal-content2 ${isDarkMode ? "dark-mode" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onHide}>
          &times;
        </button>

        <AwesomeSlider className="imageProject">{img}</AwesomeSlider>

        <p
          className={`descriptionProject ${isDarkMode ? "dark-mode" : ""}`}
          style={{ "--project-color": color }}
        >
          {description}
        </p>
        <ul className="list-inline">{tech}</ul>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
