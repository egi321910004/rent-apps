import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import WeddingComponent from "../Template/Template1/Template1";

const TryIndex = ({ isActive, onClose }) => {
  const [isActiveDdl, setIsActiveDdl] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    penerima: "",
    ucapan: "",
    weddingurl: "",
    tipe: "",
  });

  const toggleDropdown = () => {
    setIsActiveDdl(!isActiveDdl);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsActiveDdl(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      tipe: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally handle form submission logic here
    // For now, let's just log the formData
    console.log(formData);
  };

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
          <form onSubmit={handleSubmit}>
            <div className="columns">
              <div className="column is-half">
                <WeddingComponent
                  name1={formData.name1}
                  name2={formData.name2}
                  weddingurl={formData.weddingurl}
                  ucapan={formData.ucapan}
                  penerima={formData.penerima}
                  tipe={formData.tipe}
                />
              </div>
              <div className="card column is-half">
                <label>Name 1</label>
                <input
                  className="input mb-2 "
                  type="text"
                  placeholder="Nama 1"
                  name="name1"
                  value={formData.name1}
                  onChange={handleInputChange}
                />
                <label className="mt-2">Name 2</label>
                <input
                  className="input mb-2 "
                  type="text"
                  placeholder="Nama 2"
                  name="name2"
                  value={formData.name2}
                  onChange={handleInputChange}
                />
                <label className="mt-2">Penerima Undangan</label>
                <input
                  className="input mb-2 "
                  type="text"
                  placeholder="Penerima Undangan"
                  name="penerima"
                  value={formData.penerima}
                  onChange={handleInputChange}
                />
                <label className="mt-2">Deskripsi 1</label>
                <textarea
                  className="textarea mb-2"
                  placeholder="Deskripsi 1"
                  name="ucapan"
                  value={formData.ucapan}
                  onChange={handleInputChange}
                />
                <label className="mt-2">Wedding URL</label>
                <div>
                  <input
                    className="input mt-2"
                    type="text"
                    placeholder="Wedding URL"
                    name="weddingurl"
                    value={formData.weddingurl}
                    onChange={handleInputChange}
                  />
                  <div className="select mt-2">
                    <select value={formData.tipe} onChange={handleSelectChange}>
                      <option value="">Select Tipe</option>
                      <option value="Gambar">Gambar</option>
                      <option value="Video">Video</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="button is-primary mt-4">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default TryIndex;
