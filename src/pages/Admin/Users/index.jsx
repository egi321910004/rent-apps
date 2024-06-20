import React from "react";
import UserTable from "../../../components/Admin/users/usersTable";

export default function index() {
  return (
    <div>
      <div className="hero-body mb-5">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title">User Configuration</h1>
            </div>
          </div>
          <div className="level-right" style={{ display: "none" }}>
            <div className="level-item"></div>
          </div>
        </div>
      </div>
      <div
        className="level-left"
        style={{ display: "flex", justifyContent: "start" }}
      >
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input
                className="input"
                type="text"
                style={{ height: "40px" }}
                placeholder="Find a post"
              />
            </p>
            <p className="control">
              <button className="button">Search</button>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <UserTable />
      </div>
    </div>
  );
}
