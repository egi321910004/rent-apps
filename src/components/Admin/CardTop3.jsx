import React from "react";

import { FaSplotch, FaTh, FaUserFriends } from "react-icons/fa";

const CardTop3 = () => {
  return (
    <div>
      {/* Header */}
      {/* <div className="hero-body">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title">Dashboard</h1>
            </div>
          </div>
          <div className="level-right" style={{ display: "none" }}>
            <div className="level-item"></div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Main Section */}
      <section
        className="section is-main-section mt-1"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* Clients Card */}
        <div className="tile is-parent m-3" style={{ width: "40%" }}>
          <div className="card tile is-child">
            <div className="card-content">
              <div className="level is-mobile">
                <div className="level-item">
                  <div className="is-widget-label">
                    <h3 className="subtitle is-spaced">Clients</h3>
                    <h1 className="title">512</h1>
                  </div>
                  <div className="is-widget-icon m-4">
                    <span className="icon has-text-primary is-large">
                      <FaUserFriends size="48px" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Card */}
        <div className="tile is-parent m-4" style={{ width: "40%" }}>
          <div className="card tile is-child">
            <div className="card-content">
              <div className="level is-mobile">
                <div className="level-item">
                  <div className="is-widget-label">
                    <h3 className="subtitle is-spaced">Template</h3>
                    <h1 className="title">68</h1>
                  </div>
                  <div className="is-widget-icon m-4">
                    <span className="icon has-text-info is-large">
                      <FaTh size="48px" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Card */}
        <div className="tile is-parent m-4" style={{ width: "40%" }}>
          <div className="card tile is-child">
            <div className="card-content">
              <div className="level is-mobile">
                <div className="level-item">
                  <div className="is-widget-label">
                    <h3 className="subtitle is-spaced">Subscriber</h3>
                    <h1 className="title">45</h1>
                  </div>
                  <div className="is-widget-icon m-4">
                    <span className="icon has-text-success is-large">
                      <FaSplotch size="48px" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardTop3;
