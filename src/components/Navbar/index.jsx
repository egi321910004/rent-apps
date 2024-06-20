import logo from "../../assets/RENT.png";
import { RiLoginCircleLine } from "react-icons/ri";
import { useState } from "react";

export default function Index() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const getlocal = localStorage.getItem("token");

  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ position: "fixed", top: 0, left: 0, right: 0 }}
      >
        <div className="navbar-brand">
          <a className="navbar-item ml-2" href="/VerifyUser">
            <img
              className="image"
              src={logo}
              style={{ width: "150px", height: "100%", objectFit: "cover" }}
              alt="Logo"
            />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
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
            <a href="/Template" className="navbar-item">
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
        </div>
      </nav>
    </>
  );
}
