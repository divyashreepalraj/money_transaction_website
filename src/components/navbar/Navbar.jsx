import "./navbar.css";
import CompButton from "../button/CompButton";
import NavLinks from "./NavLinks";
import LogoImage from "../LogoImage";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <LogoImage />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 navLink_parent">
            <NavLinks />
          </ul>

          <div className="btn_group">
            <CompButton text="Login" className="stroke_btn" />
            <CompButton text="Get Started" className="blue_btn" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
