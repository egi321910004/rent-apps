import React, { useState } from "react";

import ModalDetail from "../../Template/components/ModalDetail";
import ChatBotComponent from "../../../components/utils/Chatbox";
import TryIndex from "../../../components/TryNow/TryIndex";
import { RiInformation2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";

const categories = ["Wedding"];
const cardsData = {
  Wedding: [
    {
      imageSrc:
        "https://marketplace.canva.com/EAFy1HyqOdA/1/0/1143w/canva-blue-white-simple-wedding-invitation-FFIFUrRuYg0.jpg",
      altText: "Science Card 1",
      title: "DwiRendraEO - Wedding Invitation Soft White",
      content:
        "Pernikahan Dari EO Ternama yang memberikan kenangan sempurna untuk pasangan yang akan segera menikah dengan tema soft white...",
      modalTargetId: "science1-modal",
    },
    {
      imageSrc:
        "https://marketplace.canva.com/EAFxJRfg2jQ/1/0/1135w/canva-blue-and-white-floral-wedding-invitation-wzs3ZlGJyfM.jpg",
      altText: "Science Card 1",
      title: "DwiRendraEO - Wedding Invitation Soft Roses",
      content:
        "Pernikahan Dari EO Ternama yang memberikan kenangan sempurna untuk pasangan yang akan segera menikah dengan tema soft white...",
      modalTargetId: "science1-modal",
    },
  ],
};

const ViewerSubs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalDetail, setModalDetail] = useState(false);
  const [openConfig, setOpenConfig] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [showAll, setShowAll] = useState(false);

  const ModalopenConfig = () => {
    setOpenConfig(true);
  };

  const openDetail = (card) => {
    setSelectedCard(card);
    setModalDetail(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAllClick = () => {
    setShowAll(true);
    setSelectedCategory(null); // Reset selected category when clicking "Show All"
  };

  const filteredCards = selectedCategory
    ? cardsData[selectedCategory].filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : Object.values(cardsData)
        .flat()
        .filter((card) =>
          card.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <>
      <div className="container">
        <div
          className="level-item mt-5"
          style={{ display: "flex", justifyContent: "start" }}
        >
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
        {/* Search bar with border and background color */}

        {/* Category buttons with hover effect and rounded corners */}
        <div className="categories mt-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`category ${
                selectedCategory === category ? "active" : ""
              }`}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                marginRight: "10px",
                marginBottom: "10px",
                backgroundColor: "#f2f2f2",
                color: "#243A73",
                transition: "background-color 0.2s ease-in-out",
              }}
            >
              {category}
            </button>
          ))}
          <button
            onClick={handleShowAllClick}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: showAll ? "#243A73" : "#f2f2f2",
              color: showAll ? "white" : "#243A73",
              transition:
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
            }}
          >
            {showAll ? "Show All" : "Show All"}
          </button>
        </div>

        {/* Cards with rounded corners and hover effect */}
        <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {filteredCards.map((card, index) => (
            <div
              key={index}
              className="card is-shady"
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                margin: "10px",
                width: "calc(25% - 20px)",
              }}
            >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={card.imageSrc}
                    alt={card.altText}
                    className="modal-button"
                    data-target={card.modalTargetId}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </figure>
              </div>
              <div className="card-content" style={{ padding: "10px" }}>
                <h4>{card.title}</h4>
                <div>
                  <span className="tag is-black m-1">Romantis</span>
                  <span className="tag is-dark m-1">Undangan</span>
                  <span className="tag is-light m-1">Wedding</span>
                  <span className="tag is-white m-1">Spesial</span>
                  <span className="tag is-primary m-1">Promo</span>
                  <span className="tag is-link m-1">Free</span>
                  <span className="tag is-info m-1">Indonesia</span>
                  <span className="tag is-success m-1">Top 10</span>
                  <span className="tag is-warning m-1">News</span>
                  <span className="tag is-danger m-1">Most Subs</span>
                </div>
                <p className="mt-2">{card.content}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "10px",
                  }}
                >
                  <a href="/viewer/analytics">
                    <button
                      className="button is-danger is-outlined modal-button"
                      data-target={card.modalTargetId}
                      style={{ marginLeft: "8px" }}
                    >
                      <MdAnalytics />
                    </button>
                  </a>

                  <button
                    className="button is-info is-outlined modal-button"
                    data-target={card.modalTargetId}
                    style={{ marginLeft: "8px" }}
                    onClick={() => openDetail(card)}
                  >
                    <RiInformation2Fill />
                  </button>
                  <button
                    className="button is-warning is-outlined modal-button"
                    data-target={card.modalTargetId}
                    style={{ marginLeft: "8px" }}
                    onClick={() => ModalopenConfig()}
                  >
                    <IoSettings />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TryIndex isActive={openConfig} onClose={() => setOpenConfig(false)} />
      </div>
      {modalDetail && selectedCard && (
        <div className="modal is-active" style={{ width: "100%" }}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <ModalDetail
                isActive={modalDetail}
                onClose={() => setModalDetail(false)}
              />{" "}
              {/* Pass selected card data */}
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setModalDetail(false)}
          ></button>
        </div>
      )}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          margin: "auto",
        }}
      >
        <nav
          className="pagination mt-5"
          role="navigation"
          aria-label="pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            margin: "auto",
          }}
        >
          <ul className="pagination-list">
            <li>
              <a
                className="pagination-link is-current"
                aria-label="Page 1"
                aria-current="page"
              >
                1
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ChatBotComponent />
    </>
  );
};

export default ViewerSubs;
