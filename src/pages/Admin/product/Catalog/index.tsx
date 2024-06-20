import React, { useState } from "react";
import KatalogTab from "../../../../components/Admin/product/CatalogTable";
import ModalAddCatalog from "../../../../components/Admin/product/ModalAddCatalogue";

export default function index() {
  const [modalAdd, setModalAdd] = useState(false);

  const toggleModalAdd = () => {
    setModalAdd(true);
  };
  return (
    <div>
      <ModalAddCatalog isActive={modalAdd} onClose={() => setModalAdd(false)} />
      <div className="hero-body mb-5">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title">Catalogue Configuration</h1>
            </div>
          </div>
          <div className="level-right" style={{ display: "none" }}>
            <div className="level-item"></div>
          </div>
        </div>
      </div>
      <div
        className="level-left mt-5"
        style={{ display: "flex", justifyContent: "space-between" }}
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
        <div className="level-item">
          <button
            className="button is-success is-outlined mt-2"
            onClick={() => toggleModalAdd()}
          >
            Add Catalog
          </button>
        </div>
      </div>
      <KatalogTab />
    </div>
  );
}
