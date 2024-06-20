import React, { useState } from "react";
import CardPro from "../../../components/Admin/product/ProductCard";
import ModalAddTemp from "./components/ModalAdd";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const toggleModal = () => {
    setModalAdd(!modalAdd);
  };

  return (
    <div>
      <ModalAddTemp isActive={modalAdd} onClose={() => setModalAdd(false)} />
      <div className="hero-body mb-5">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title">Product Configuration</h1>
            </div>
          </div>
          <div className="level-right" style={{ display: "none" }}>
            <div className="level-item"></div>
          </div>
        </div>
      </div>
      <div
        className="level-left mt-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="level-item mt-5">
          <div className="field has-addons mt-4">
            <p className="control">
              <input
                className="input"
                type="text"
                style={{ height: "40px" }}
                placeholder="Find a product"
              />
            </p>
            <p className="control">
              <button className="button">Search</button>
            </p>
          </div>
          <div className="ml-2 mt-1.5">
            <div className={`dropdown ${isActive ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={toggleDropdown}
                >
                  <span>Filter by Catalog</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Otomotif
                  </a>
                  <a className="dropdown-item">Wedding</a>
                  <a href="#" className="dropdown-item is-active">
                    Romance
                  </a>
                  <a href="#" className="dropdown-item">
                    Business
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    Setting Catalog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="level-item">
          <button
            className="button is-success is-outlined mt-2"
            onClick={() => {
              toggleModal();
            }}
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Product cards section */}
      <section className="container mt-10">
        <div className="columns features">
          <CardPro
            imageSrc="https://marketplace.canva.com/EAFy1HyqOdA/1/0/1143w/canva-blue-white-simple-wedding-invitation-FFIFUrRuYg0.jpg"
            altText="Placeholder image 1"
            title="Template Valentine's Day Card"
            content="Template kartu Valentine ini adalah perwujudan dari kasih sayang yang tulus. Didesain dengan nuansa yang hangat dan menyentuh hati, kartu ini menggambarkan kelembutan dan keindahan dalam bentuknya yang sederhana namun penuh makna. "
            modalTargetId="modal-image2"
          />
          {/* <CardPro
            imageSrc="https://img.freepik.com/free-vector/flat-minimal-wedding-vertical-banners-set_23-2150101550.jpg?t=st=1718476505~exp=1718480105~hmac=bc1915602bcf2ac864a9a33bf3e1e6647d2c05a4a3eece23af68cbf53edbc39e&w=826"
            altText="Template Wedding Card 1"
            title="Template Wedding Card 1"
            content="template undangan nikah online ini memancarkan kesan elegan dan keanggunan. Dirancang untuk memudahkan para pengundang dalam mengakses informasi yang penting, kombinasi sempurna antara kemudahan teknologi modern dan kehangatan."
            modalTargetId="modal-card"
          /> */}
          {/* Add more Card components as needed */}
        </div>
      </section>
    </div>
  );
}
