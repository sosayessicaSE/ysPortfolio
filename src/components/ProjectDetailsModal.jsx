import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import "../views/projectsmodal.css";

const ProjectDetailsModal = ({ data, onHide }) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(0), [data]);

  useEffect(() => {
    if (!data) return undefined;
    const count = data.images.length;
    const onKey = (e) => {
      if (e.key === "Escape") onHide();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [data, onHide]);

  if (!data) return null;

  const { title, type, year, description, points, images, url, caseUrl, stack = [], fit, backdrop } = data;
  const many = images.length > 1;
  const go = (d) => setIndex((i) => (i + d + images.length) % images.length);

  return (
    <div className="pmodal" onClick={onHide} role="presentation">
      <div
        className="pmodal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="pmodal__close" onClick={onHide} aria-label={t("ui.close")}>
          <FiX />
        </button>

        <div
          className={`pmodal__stage${fit === "contain" ? " pmodal__stage--contain" : ""}`}
          style={fit === "contain" ? { background: backdrop } : undefined}
        >
          <img src={images[index]} alt={`${title} ${index + 1}`} />
          {many && (
            <>
              <button type="button" className="pmodal__nav pmodal__nav--prev" onClick={() => go(-1)} aria-label="Previous image">
                <FiChevronLeft />
              </button>
              <button type="button" className="pmodal__nav pmodal__nav--next" onClick={() => go(1)} aria-label="Next image">
                <FiChevronRight />
              </button>
            </>
          )}
        </div>

        {many && (
          <div className="pmodal__thumbs">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`pmodal__thumb${i === index ? " is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Image ${i + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className="pmodal__body">
          <p className="pmodal__meta">{[type, year].filter(Boolean).join(" · ")}</p>
          <h2 className="pmodal__title">{title}</h2>
          <p className="pmodal__desc">{description}</p>
          {points.length > 0 && (
            <ul className="pmodal__points">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
          {stack.length > 0 && (
            <ul className="pmodal__stack">
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}
          {(url || caseUrl) && (
            <div className="pmodal__actions">
              {url && (
                <a className="btn btn--primary" href={url} target="_blank" rel="noopener noreferrer">
                  {t("ui.visit")} <FiArrowUpRight />
                </a>
              )}
              {caseUrl && (
                <a className="btn btn--ghost" href={caseUrl} target="_blank" rel="noopener noreferrer">
                  {t("ui.caseStudy")} <FiArrowUpRight />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectDetailsModal.propTypes = {
  data: PropTypes.object,
  onHide: PropTypes.func.isRequired,
};

export default ProjectDetailsModal;
