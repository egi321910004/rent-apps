import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";

import Swal from "sweetalert2";
import { getAllCatalogues } from "../../../../services/Catalog/catalog.services";

const ModalAddTemp = ({ isActive, onClose }) => {
  const [isActiveDdl, setIsActiveDdl] = useState(false);
  const [data, setData] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const token = localStorage.getItem("token");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [templateData, setTemplateData] = useState({
    name_template: "",
    design_by: "",
    link_demo: "",
    description: "",
    id_catalogue: "",
  });

  const toggleDropdown = () => {
    setIsActiveDdl(!isActiveDdl);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsActiveDdl(false);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const selectedFilesArray = Array.from(files);
      setSelectedFiles(selectedFilesArray);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTemplateData({
      ...templateData,
      [name]: value,
    });
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async () => {
    const result = await Swal.fire({
      title: "Do you want to publish Template?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "publish",
      denyButtonText: `Don't publish`,
    });

    if (result.isConfirmed) {
      const requestData = {
        id_catalogue: selectedColor || "",
        template_name: templateData.name_template,
        design_by: templateData.design_by,
        link_demo: templateData.link_demo,
        description: templateData.description,
        image_templates: [],
      };

      for (const file of selectedFiles) {
        const base64 = await fileToBase64(file);
        requestData.image_templates.push({
          name: file.name,
          image_template: base64,
        });
      }

      try {
        const response = await fetch(
          "https://development-rentapp-8d3349904b3d.herokuapp.com/api/Template/create_template",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestData),
          }
        );

        if (response.ok) {
          console.log("Template added successfully!");
          Swal.fire("Saved!", "Template added successfully!", "success").then(
            () => onClose()
          );
        } else {
          console.error("Failed to add template");
          Swal.fire("Error", "Failed to add template", "error");
        }
      } catch (error) {
        console.error("Error adding template:", error);
        Swal.fire("Error", `Error adding template: ${error.message}`, "error");
      }
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  };

  const colorOptions = [
    { label: "Romance", className: "is-success" },
    { label: "Wedding", className: "is-warning" },
  ];

  useEffect(() => {
    fetchCatalogues();
  }, []);

  const fetchCatalogues = async () => {
    try {
      const data = await getAllCatalogues(1, 10, true, "");
      setData(data.data);
    } catch (error) {
      console.error("Error fetching catalogues:", error);
    }
  };
  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add New Template</p>
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
            placeholder="Nama Template"
            name="name_template"
            value={templateData.name_template}
            onChange={handleInputChange}
          />
          <input
            className="input is-primary mt-4"
            type="text"
            placeholder="Design By"
            name="design_by"
            value={templateData.design_by}
            onChange={handleInputChange}
          />
          <input
            className="input is-primary mt-4"
            type="text"
            placeholder="Link Demo"
            name="link_demo"
            value={templateData.link_demo}
            onChange={handleInputChange}
          />
          <textarea
            className="textarea mt-4"
            placeholder="Deskripsi"
            name="description"
            value={templateData.description}
            onChange={handleInputChange}
          ></textarea>

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
                <span>
                  {selectedColor ? selectedColor : "Select a Catalog"}
                </span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {data.map((color) => (
                  <a
                    key={color.id}
                    className={`dropdown-item ${color.className}`}
                    onClick={() => handleColorSelect(color.id)}
                  >
                    <span className={`tag ${color.className}`}>
                      {color.catalog_name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="file mt-4">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  name="image"
                  multiple
                  onChange={handleFileChange}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    {selectedFiles.length > 0
                      ? `${selectedFiles.length} files selected`
                      : "Choose files..."}
                  </span>
                </span>
              </label>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button className="button is-success" onClick={handleSubmit}>
              Publish
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

export default ModalAddTemp;
