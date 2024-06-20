import React, { useEffect } from "react";
import CardTop3 from "../../../components/Admin/CardTop3";

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
    <div className="mt-14">
      <CardTop3 />
    </div>
  );
}
