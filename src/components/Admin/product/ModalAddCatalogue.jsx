import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { PostCatalogue } from "../../../services/Catalog/catalog.services";
// Adjust the path as per your project structure

const ModalAddCatalog = ({ isActive, onClose }) => {
  const [isActiveDdl, setIsActiveDdl] = useState(false);
  const [selectedColor, setSelectedColor] = useState();
  const [catalogName, setCatalogName] = useState("");

  const toggleDropdown = () => {
    setIsActiveDdl(!isActiveDdl);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsActiveDdl(false);
  };

  const colorOptions = [
    { label: "Black", className: "is-black" },
    { label: "Dark", className: "is-dark" },
    { label: "Light", className: "is-light" },
    { label: "White", className: "is-white" },
    { label: "Primary", className: "is-primary" },
    { label: "Link", className: "is-link" },
    { label: "Info", className: "is-info" },
    { label: "Success", className: "is-success" },
    { label: "Warning", className: "is-warning" },
    { label: "Danger", className: "is-danger" },
  ];

  const handleSaveChanges = async () => {
    try {
      if (!catalogName || !selectedColor) {
        return;
      }
      await PostCatalogue(catalogName, selectedColor, 0);
      setCatalogName("");
      setSelectedColor(null);
      onClose();
    } catch (error) {
      console.error("Error saving catalogue:", error);
    }
  };

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add New Catalogue</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <input
            className="input is-primary"
            type="text"
            placeholder="Catalogue Name"
            value={catalogName}
            onChange={(e) => setCatalogName(e.target.value)}
          />
          <div
            className={`dropdown ${isActiveDdl ? "is-active" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={toggleDropdown}
              >
                <span>{selectedColor ? selectedColor : "Select a color"}</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {colorOptions.map((color) => (
                  <a
                    key={color.label}
                    className={`dropdown-item ${color.className}`}
                    onClick={() => handleColorSelect(color.label)}
                  >
                    <span className={`tag ${color.className}`}>
                      {color.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button
              className="button is-success"
              onClick={() => handleSaveChanges()}
            >
              Save changes
            </button>
            <button className="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ModalAddCatalog;
