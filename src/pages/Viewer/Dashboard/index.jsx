import React, { useEffect } from "react";
import CardTop3 from "../../../components/Admin/CardTop3";
import UserTableNews from "./components/TableNews";

export default function index() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);
  return (
    <div>
      <section className="section is-title-bar has-text-black">
        <nav
          className="breadcrumb has-arrow-separator has-text-black"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <a href="/viewer/dashboard" style={{ color: "black" }}>
                User
              </a>
            </li>
            <li>
              <a href="/viewer/dashboard" style={{ color: "black" }}>
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <div>
        <h4>News Template Release</h4>
        <UserTableNews />
      </div>
    </div>
  );
}
