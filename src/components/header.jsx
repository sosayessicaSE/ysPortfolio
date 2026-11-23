import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import bannerDark from "../images/banner-dark.webp";
import bannerLight from "../images/banner-light.webp";
import "../views/header.css";

/** Signature banner: name, title and illustration. Sits above the sticky menu on every page. */
const Header = ({ isDarkMode }) => (
  <div className="banner">
    <Link to="/" className="banner__link" aria-label="Yessica Maitia, Full Stack Engineer. Home">
      <img
        src={isDarkMode ? bannerDark : bannerLight}
        alt=""
        width={1160}
        height={360}
        className="banner__img"
      />
    </Link>
  </div>
);

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
