import React, { useEffect } from "react";
import ModalConfig from "../../../pages/Admin/product/Configuration/TempConfig";

const CardPro = ({ data, setData }) => {
  const [modalConfig, setModalConfig] = React.useState(false);

  const openConfig = () => {
    setModalConfig(true);
  };

  return (
    <div className="">
      <ModalConfig
        isActive={modalConfig}
        onClose={() => setModalConfig(false)}
      />
      <div
        className="card-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data.map((card, index) => (
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
                {card.image_templates.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`data:image/png;base64,${image.image}`}
                    className="modal-button"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    alt={`Image ${imgIndex}`} // Provide a meaningful alt text
                  />
                ))}
              </figure>
            </div>
            <div className="card-content" style={{ padding: "10px" }}>
              <h4>{card.template_name}</h4>
              <div>
                <span className="tag is-black m-1">{card.catalogue}</span>
              </div>
              <p className="mt-2">{card.description}</p>
              <div
                className="mt-4"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <button
                  className="button is-info is-outlined modal-button mr-2"
                  onClick={() => openConfig()}
                >
                  Configuration
                </button>
                <span className="button is-warning is-outlined modal-button">
                  Edit
                </span>
                <span className="button is-danger is-outlined modal-button ml-2">
                  Delete
                </span>
              </div>
            </div>
          </div>
        ))}
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
