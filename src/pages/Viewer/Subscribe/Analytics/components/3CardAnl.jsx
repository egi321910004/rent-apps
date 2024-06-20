import React from "react";

import {
  FaCalendarCheck,
  FaCommentDots,
  FaSplotch,
  FaTh,
  FaUserFriends,
} from "react-icons/fa";
import { FaCalendarXmark } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

const CardTop3Viewer = () => {
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
                    <h3 className="subtitle is-spaced">Present</h3>
                    <h1 className="title">512</h1>
                  </div>
                  <div className="is-widget-icon m-4">
                    <span className="icon has-text-primary is-large">
                      <FaCalendarCheck size="48px" />
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
                    <h3 className="subtitle is-spaced">Like</h3>
                    <h1 className="title">68</h1>
                  </div>
                  <div className="is-widget-icon m-4">
                    <span className="icon has-text-info is-large">
                      <FcLike size="48px" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-parent m-4" style={{ width: "40%" }}>
          <div className="card tile is-child">
            <div className="card-content">
              <div className="level is-mobile">
                <div className="level-item">
                  <div className="is-widget-label">
                    <h3 className="subtitle is-spaced">Comments</h3>
                    <h1 className="title">68</h1>
                  </div>
                  <div className="is-widget-icon m-4">
                    <span className="icon has-text-info is-large">
                      <FaCommentDots size="48px" />
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
                    <h3 className="subtitle is-spaced">absent</h3>
                    <h1 className="title">45</h1>
                  </div>
                  <div className="is-widget-icon m-4">
                    <span className="icon has-text-danger is-large">
                      <FaCalendarXmark size="48px" />
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

export default CardTop3Viewer;
