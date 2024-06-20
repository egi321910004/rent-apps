import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const WeddingComponent = ({
  name1,
  name2,
  weddingurl,
  tipe,
  ucapan,
  penerima,
}) => {
  const GOOGLE_CALENDAR_LINK = "https://calendar.google.com";
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleView = (isMobile) => {
    setIsMobileView(isMobile);
  };

  const renderGuestSection = (name) => {
    return (
      <div className="guest-section" style={{ marginTop: "2em" }}>
        <span className="has-text-weight-semibold">{name}</span>
      </div>
    );
  };

  const renderBackground = () => {
    if (tipe === "Video") {
      return (
        <div
          style={{
            width: "100%",
            height: isMobileView ? "100vh" : "50vh", // Adjust height for mobile view
            position: "relative",
          }}
        >
          {/* Replace with your video component */}
          <video
            autoPlay
            muted
            loop
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src={weddingurl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return (
        <header
          id="fh5co-header"
          role="banner"
          className={`fh5co-cover box ${
            isMobileView ? "mobile-view" : "desktop-view"
          }`}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${weddingurl})`,
            minHeight: isMobileView ? "100vh" : "50vh", // Adjust height for mobile view
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <h4 className="sub-title">The Wedding of</h4>
                <h1 className="title">
                  {name1} &amp; {name2}
                </h1>
                <div className="margin__bottom mb-4">{ucapan}</div>
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-md-3">
                    <a
                      href={GOOGLE_CALENDAR_LINK}
                      title="Add to My Calendar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="button is-danger is-outlined">
                        <FaCalendarDays /> Add to Calendar
                      </button>
                    </a>
                  </div>
                </div>
                <br />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1em",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {renderGuestSection(penerima)}
                  <div className="row">
                    <div className="col-md-3">
                      <Link to={`/e-ticket?1`}>
                        <button className="btn btn-default btn-block">
                          Lihat e-Ticket
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </header>
      );
    }
  };

  return (
    <div style={{ width: "100%" }} className="box">
      <div className="mb-4">
        <button
          className={`button is-success is-outlined mr-2 ${
            isMobileView ? "" : "is-active"
          }`}
          onClick={() => toggleView(false)}
        >
          <RiComputerFill />
        </button>
        <button
          className={`button is-warning is-outlined ${
            isMobileView ? "is-active" : ""
          }`}
          onClick={() => toggleView(true)}
        >
          <FaMobileAlt />
        </button>
      </div>
      {renderBackground()}
    </div>
  );
};

export default WeddingComponent;
