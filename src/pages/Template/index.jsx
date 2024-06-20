import React, { useState } from "react";
import Header from "../../components/Navbar/Header";
import Footer2 from "../../components/Footer/Footer2";
import ChatBotComponent from "../../components/utils/Chatbox";
import ModalDetail from "./components/ModalDetail";

const categories = ["Technology", "Science", "Art", "History", "Wedding"];
const cardsData = {
  Technology: [
    {
      imageSrc:
        "https://graygrids.com/_next/image?url=https%3A%2F%2Fapi.graygrids.com%2Fpublic%2Fimages%2Ftailadmin-gg.jpg&w=1920&q=75",
      altText: "Tech Card 1",
      title: "TMaxima - Tailwind CSS Business and Agency Template",
      content:
        "Maxima is high-quality Tailwind CSS web template for business, startup and agencies. Comes with all essential...",
      modalTargetId: "tech1-modal",
    },
  ],
  Science: [
    {
      imageSrc:
        "https://graygrids.com/_next/image?url=https%3A%2F%2Fapi.graygrids.com%2Fpublic%2Fimages%2Fgo-gg.jpg&w=1920&q=75",
      altText: "Science Card 1",
      title: "Go - Tailwind CSS Template for Startup and Business",
      content:
        "Go is a premium Tailwind CSS template specially designed for business, startup, SaaS, and agency websites..",
      modalTargetId: "science1-modal",
    },
  ],
  Art: [
    {
      imageSrc:
        "https://graygrids.com/_next/image?url=https%3A%2F%2Fapi.graygrids.com%2Fpublic%2Fimages%2Fplay-tailwind-gg.jpg&w=1920&q=75",
      altText: "Science Card 1",
      title: "StartWind - Tailwind CSS Startup Template",
      content:
        "StartWind is a Tailwind CSS based template, packed with essential features for startups, agencies, and business websites. It's fast, SEO op...",
      modalTargetId: "science1-modal",
    },
  ],
  History: [
    {
      imageSrc:
        "https://graygrids.com/_next/image?url=https%3A%2F%2Fapi.graygrids.com%2Fpublic%2Fimages%2FBlink-Thumbnail.jpg&w=1920&q=75",
      altText: "Science Card 1",
      title: "Blink - Free Startup Website Template",
      content:
        "Blink is 100% Startup focused HTML website template that built-with Bootstrap 5. Blink is a clean, responsive, and modern template for start...",
      modalTargetId: "science1-modal",
    },
  ],
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
    {
      imageSrc:
        "https://images.examples.com/wp-content/uploads/2019/03/Artsy-Wedding-Invitation-Card.jpg",
      altText: "Science Card 1",
      title: "DwiRendraEO - Wedding Invitation Soft Texs",
      content:
        "Pernikahan Dari EO Ternama yang memberikan kenangan sempurna untuk pasangan yang akan segera menikah dengan tema soft white...",
      modalTargetId: "science1-modal",
    },
    {
      imageSrc:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/324638127/original/00de80be81a0aff954d0d2fbc4f5960fb3be0710/create-amazing-wedding-invitations-and-birthday-invitations.png",
      altText: "Science Card 1",
      title: "DwiRendraEO - Wedding Invitation Soft 0011",
      content:
        "Pernikahan Dari EO Ternama yang memberikan kenangan sempurna untuk pasangan yang akan segera menikah dengan tema soft white...",
      modalTargetId: "science1-modal",
    },
  ],
};

const IndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalDetail, setModalDetail] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [showAll, setShowAll] = useState(false);

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
      {/* Header with a background color */}
      <Header />

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
            justifyContent: "space-around",
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
                  <button
                    className="button is-success is-outlined modal-button"
                    data-target={card.modalTargetId}
                    style={{ marginLeft: "8px" }}
                  >
                    Subscribe
                  </button>
                  <button
                    className="button is-info is-outlined modal-button"
                    data-target={card.modalTargetId}
                    style={{ marginLeft: "8px" }}
                    onClick={() => openDetail(card)}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
            <li>
              <a href="#" className="pagination-link" aria-label="Goto page 2">
                2
              </a>
            </li>
            <li>
              <a href="#" className="pagination-link" aria-label="Goto page 3">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ChatBotComponent />
      <Footer2 />
    </>
  );
};

export default IndexPage;
