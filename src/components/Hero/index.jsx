import React, { useState } from "react";
import logonav from "../../assets/RENT.png";
import { RiLoginCircleLine } from "react-icons/ri";
const index = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const getlocal = localStorage.getItem("token");
  return (
    <section className="hero main_hero is-fullheight  ">
      <div className="hero-head">
        <div className="first_nav">
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <img
                    src={logonav}
                    alt="Bulma Hotel"
                    style={{ width: "108px", objectFit: "cover" }}
                  />
                </a>
                <a
                  className="navbar-item is-hidden-desktop"
                  href="tel:+302109849583"
                >
                  <span className="icon" style={{ color: "#333" }}>
                    <i className="fa fa-lg fa-phone-alt"></i>
                  </span>
                </a>
                <a
                  className="navbar-item is-hidden-desktop"
                  href="mailto:reservations@bulmahotels.com"
                >
                  <span className="icon" style={{ color: "#333" }}>
                    <i className="fa fa-lg fa-envelope"></i>
                  </span>
                </a>
                <a
                  className="navbar-item is-hidden-desktop"
                  href="#"
                  target="_blank"
                >
                  <span className="icon">
                    <i className="fab fa-lg fa-facebook-f"></i>
                  </span>
                </a>
                {/* Mobile Menu */}
                <div
                  className="navbar-burger burger"
                  data-target="navMenuBlogHero"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              {/* Menu */}
              <div className="navbar-start ">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a
                    className="navbar-link"
                    onClick={() => setShowDropdown1(!showDropdown1)}
                  >
                    Layanan
                  </a>

                  <div
                    className={`navbar-dropdown ${
                      showDropdown1 ? "is-active" : ""
                    }`}
                  >
                    <a href="/" className="navbar-item">
                      Pelatihan Web Developer
                    </a>{" "}
                    <a href="/" className="navbar-item">
                      Jasa Design Website
                    </a>
                    <a href="/" className="navbar-item">
                      Sewa WebApps
                    </a>
                    <a href="/" className="navbar-item">
                      Google WorkingSpace
                    </a>
                    <a href="/" className="navbar-item">
                      Konsultasi Online
                    </a>
                  </div>
                </div>
                <a
                  href="/Template"
                  className="navbar-item"
                  style={{ textAlign: "center" }}
                >
                  {" "}
                  Template{" "}
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a
                    className="navbar-link"
                    onClick={() => setShowDropdown2(!showDropdown2)}
                  >
                    Hubungi Kami
                  </a>

                  <div
                    className={`navbar-dropdown ${
                      showDropdown2 ? "is-active" : ""
                    }`}
                  >
                    <a href="/" className="navbar-item">
                      Hubungi Kami
                    </a>{" "}
                    <a href="/" className="navbar-item">
                      Mitra Kami
                    </a>
                    <a href="/" className="navbar-item">
                      Tentang Kami
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    {/* <button className="button is-light mr-2">
                      <RiLoginCircleLine />
                    </button> */}
                    {!getlocal && (
                      <a href="/Login">
                        {" "}
                        <button className="button is-success mr-2">
                          COBA GRATIS
                        </button>
                      </a>
                    )}

                    {getlocal && (
                      <button className="button mr-2">
                        <RiLoginCircleLine />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="slider-content animated zoomIn pb-6"></div>
          <span className="scroll-down animated zoomIn"></span>
        </div>
      </div>
    </section>
  );
};

export default index;
