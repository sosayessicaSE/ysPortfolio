import PropTypes from "prop-types";

const ProjectCard = ({ project, onOpen, large = false }) => {
  const contain = project.fit === "contain";
  return (
    <button
      type="button"
      className={`pcard${large ? " pcard--large" : ""}`}
      onClick={() => onOpen(project)}
    >
      <span
        className={`pcard__media${contain ? " pcard__media--contain" : ""}`}
        style={contain ? { background: project.backdrop } : undefined}
      >
        <img
          src={project.images[0]}
          alt=""
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
        />
      </span>
      <span className="pcard__body">
        <span className="pcard__meta">{project.type}</span>
        <span className="pcard__title">{project.title}</span>
        <span className="pcard__summary">{project.summary}</span>
      </span>
    </button>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
  large: PropTypes.bool,
};

export default ProjectCard;
