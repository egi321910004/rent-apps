import React from "react";
import ModalConfig from "../../../pages/Admin/product/Configuration/TempConfig";

const CardPro = ({ imageSrc, altText, title, content, modalTargetId }) => {
  const [modalConfig, setModalConfig] = React.useState(false);

  const openConfig = () => {
    setModalConfig(true);
  };

  return (
    <div className="column is-4">
      <ModalConfig
        isActive={modalConfig}
        onClose={() => setModalConfig(false)}
      />
      <div className="card is-shady">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={imageSrc}
              alt={altText}
              className="modal-button"
              data-target={modalTargetId}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4>{title}</h4>
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
            <p className="mt-2">{content}</p>
            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <button
                className="button is-info is-outlined modal-button mr-2"
                data-target={modalTargetId}
                onClick={() => openConfig()}
              >
                Configuration
              </button>
              <span
                className="button is-warning is-outlined modal-button"
                data-target={modalTargetId}
              >
                Edit
              </span>
              <span
                className="button is-danger is-outlined modal-button ml-2"
                data-target={modalTargetId}
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        targetId={modalTargetId}
        imageSrc={imageSrc}
        altText={altText}
        title={title}
        content={content}
      /> */}
    </div>
  );
};

export default CardPro;
