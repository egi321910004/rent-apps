import React, { useEffect, useState } from "react";
import CardPro from "../../../components/Admin/product/ProductCard";
import ModalAddTemp from "./components/ModalAdd";
import { getAllTemplates } from "../../../services/Template/template.services";
import { getAllCatalogues } from "../../../services/Catalog/catalog.services";
import { axiosWrapper } from "../../../helper/axiosWrapper";
import loading from "../../../assets/loading.gif";
export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [data, setData] = useState([]);
  const [getCategories, setGetCategories] = useState([]);
  const [selectedCatalog, setSelectedCatalog] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [countData, setCountData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 8;
  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const toggleModal = () => {
    setModalAdd(!modalAdd);
  };

  useEffect(() => {
    fetchTemplates();
    fetchCatalogues();
  }, [selectedCatalog, currentPage, modalAdd]);

  useEffect(() => {
    if (countData > 0) {
      const totalPagesCount = Math.ceil(countData / limit);
      setTotalPages(totalPagesCount);
    }
  }, [countData, limit]);

  const fetchTemplates = async () => {
    setIsLoading(true);
    try {
      const data = await axiosWrapper.post(`/api/Template/getall_templates`, {
        page: currentPage,
        limit: limit,
        isAsc: true,
        keyword: "",
        id_catalogue: selectedCatalog,
      });
      setData(data.data.data);
      setCountData(data.data.resultCountData);
    } catch (error) {
      console.error("Error fetching catalogues:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCatalogues = async () => {
    try {
      const data = await getAllCatalogues(1, 10, true, "");
      setGetCategories(data.data);
    } catch (error) {
      console.error("Error fetching catalogues:", error);
    }
  };

  const handleCatalogueChange = (catalogueId) => {
    setSelectedCatalog(catalogueId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                  {getCategories.map((catalogue) => (
                    <a
                      key={catalogue.id}
                      href="#"
                      className={`dropdown-item ${
                        selectedCatalog === catalogue.id ? "is-active" : ""
                      }`}
                      onClick={() => handleCatalogueChange(catalogue.id)}
                    >
                      {catalogue.catalog_name}
                    </a>
                  ))}
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
        {isLoading ? (
          <div
            className="has-text-centered mt-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="icon is-large">
              <i className="fas fa-spinner fa-pulse"></i>
            </span>
            <img src={loading} alt="loading" />
          </div>
        ) : (
          <div className="columns features">
            <CardPro data={data} setData={setData} />
          </div>
        )}
      </section>

      <div className="mt-10">
        <nav
          className="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <ul className="pagination-list">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <li key={page}>
                  <button
                    className={`pagination-link ${
                      currentPage === page ? "is-current" : ""
                    }`}
                    aria-label={`Goto page ${page}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
