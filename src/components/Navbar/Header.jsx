import React from "react";
import logo from "../../assets/RENT.png";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaPinterest,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaUserCircle,
} from "react-icons/fa";
import { useRecoilState } from "recoil";
import { authState } from "../../store/store";
const Header = () => {
  const role = localStorage.getItem("role");

  return (
    <header className="navigation">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="columns is-gapless is-justify-content-space-between is-align-items-center">
            {/* Left Side */}
            <div
              className="column is-6-desktop is-4-tablet has-text-left-desktop has-text-centered-mobile"
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div className="header-top-info">
                {/* <a href="tel:+23-345-67890">
                  <FaPhone className="mr-2" /> +62-22981223
                </a>
                <a href="mailto:support@gmail.com">
                  <FaEnvelope className="mr-2" />
                  support@rentapp.co.id
                </a> */}
              </div>
            </div>
            {/* Right Side */}
            <div className="column is-6-desktop is-8-tablet">
              <div
                className="header-top-info has-text-right-tablet has-text-centered-mobile"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://www.facebook.com/themefisher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/themefisher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/themefisher/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaPinterest />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a className="button is-success is-outlined">
                  <FaWhatsapp /> Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <nav id="navbar" className="navbar main-nav">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="index.html">
              <img
                className="image"
                src={logo}
                style={{ width: "150px", height: "100%", objectFit: "cover" }}
                alt="Logo"
              />
            </a>
            <button
              role="button"
              className="navbar-burger burger"
              data-hidden="true"
              data-target="navigation"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className="navbar-menu mr-0" id="navigation">
            <ul className="navbar-end">
              <li className="navbar-item">
                <a className="navbar-link" href="/">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="/Template">
                  Template
                </a>
              </li>
              {/* Dropdown example */}
              <li className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Layanan<span className="ml-1"></span>
                </a>
                <div className="navbar-dropdown">
                  <a href="/" className="navbar-item">
                    Jasa SEO
                  </a>{" "}
                  <a href="/" className="navbar-item">
                    Jasa Design Website
                  </a>
                  <a href="/" className="navbar-item">
                    Sewa WebApps Template
                  </a>
                  <a href="/" className="navbar-item">
                    Google WorkingSpace
                  </a>
                  <a href="/" className="navbar-item">
                    Konsultasi Online
                  </a>
                  <a href="/" className="navbar-item">
                    Layanan IT Staffing
                  </a>
                </div>
              </li>
              {/* Repeat similar structure for other menu items */}
              {/* ... */}
              <li className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Hubungi Kami<span className="ml-1"></span>
                </a>
                <div className="navbar-dropdown">
                  <a href="/" className="navbar-item">
                    Hubungi Kami
                  </a>{" "}
                  <a href="/" className="navbar-item">
                    Mitra Kami
                  </a>
                  <a href="/" className="navbar-item">
                    Tentang Kami
                  </a>
                  <a href="/" className="navbar-item">
                    Testimoni
                  </a>
                </div>
              </li>
              {role === "viewer" ? (
                <li className="navbar-item">
                  <a className="navbar-link" href="/viewer/dashboard">
                    User Dashboard
                  </a>
                </li>
              ) : role === "admin" ? (
                <li className="navbar-item">
                  <a className="navbar-link" href="/admin/dashboard">
                    Admin Dashboard
                  </a>
                </li>
              ) : (
                <li className="navbar-item">
                  <a className="navbar-link" href="/Login">
                    <FaUserCircle />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
