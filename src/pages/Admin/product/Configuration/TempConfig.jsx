import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../../../assets/config1.png";

const ModalConfig = ({ isActive, onClose }) => {
  const [isActiveDdl, setIsActiveDdl] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleDropdown = () => {
    setIsActiveDdl(!isActiveDdl);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsActiveDdl(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const posts = [
    {
      uuid: "1",
      images: [
        {
          original: "../../../../assets/config1.png",
          thumbnail: "../../../../assets/config1.png",
        },
      ],
      title: "Post Title 1",
      subtitle: "Subtitle 1",
      tags: ["Tag1", "Tag2"],
      content: "This is the content of the first post.",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
    },
  ];

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

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card is-large">
        <header className="modal-card-head">
          <p className="modal-card-title">Configuration Template</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="columns">
            <div className="column is-half">
              <img src={img1} style={{ width: "150%" }} />
            </div>
            <div className="card column is-half">
              <label>Name 1</label>
              <input
                className="input is-primary"
                type="text"
                placeholder="Nama 1"
                name="name_1"
              />
              <label>Name 2</label>
              <input
                className="input is-primary"
                type="text"
                placeholder="Nama 2"
                name="name_1"
              />
              <label>Title 1</label>
              <input
                className="input is-primary mt-4"
                type="text"
                placeholder="Title 1"
                name="design_by"
              />
              <label>Subtitle</label>
              <input
                className="input is-primary mt-4"
                type="text"
                placeholder="Subtitle"
                name="link_demo"
              />
              <label>Upload Audio</label>
              <div>
                <div className="file mt-4">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="image"
                      multiple
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose Music</span>
                    </span>
                  </label>
                </div>
              </div>
              <label>Upload Image</label>
              <div>
                <div className="file mt-4">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="image"
                      multiple
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose File</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModalConfig;
