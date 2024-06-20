import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import MediaComponent from "./Comment";

const ModalDetail = ({ isActive, onClose }) => {
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
          original:
            "https://img.freepik.com/free-vector/watercolor-boho-wedding-banner_23-2149130962.jpg?t=st=1718568794~exp=1718572394~hmac=3e8c6ad5b96337f892894263bb48cf523ee0b35705015661df88e43244922411&w=826",
          thumbnail:
            "https://img.freepik.com/free-vector/watercolor-boho-wedding-banner_23-2149130962.jpg?t=st=1718568794~exp=1718572394~hmac=3e8c6ad5b96337f892894263bb48cf523ee0b35705015661df88e43244922411&w=826",
        },
        {
          original:
            "https://img.freepik.com/free-vector/hand-drawn-boho-wedding-banner-vertical-template_23-2149443217.jpg?t=st=1718568858~exp=1718572458~hmac=2ba364296141c146f2f5806ffef42accfe0bc6e2957627959ca9a7be2b67fafa&w=826",
          thumbnail:
            "https://img.freepik.com/free-vector/hand-drawn-boho-wedding-banner-vertical-template_23-2149443217.jpg?t=st=1718568858~exp=1718572458~hmac=2ba364296141c146f2f5806ffef42accfe0bc6e2957627959ca9a7be2b67fafa&w=826",
        },
        {
          original:
            "https://img.freepik.com/free-vector/hand-drawn-boho-wedding-invitation-template_23-2149443214.jpg?t=st=1718568899~exp=1718572499~hmac=5fcf1a45b8fc9bf0f848659223a8674bebfb9cee1986f5c7ec106c0c3ddf597d&w=826",
          thumbnail:
            "https://img.freepik.com/free-vector/hand-drawn-boho-wedding-invitation-template_23-2149443214.jpg?t=st=1718568899~exp=1718572499~hmac=5fcf1a45b8fc9bf0f848659223a8674bebfb9cee1986f5c7ec106c0c3ddf597d&w=826",
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
      <div className="modal" onClick={onClose}></div>
      <div className="modal-card is-large">
        <header className="modal-card-head">
          <p className="modal-card-title">Detail Template</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="columns">
            <div className="column is-half">
              <ImageGallery items={posts[0].images} showBullets={false} />
            </div>
            <div className="card column is-half">
              <h2 className="title">Undangan Pernikahan V1222900FFE</h2>
              <h3 className="subtitle mt-2">By: Dwi Rendra</h3>
              <div className="tags">
                <span className="tag is-black m-1">Romantis</span>
                <span className="tag is-dark m-1">Undangan</span>
                <span className="tag is-light m-1">Wedding</span>
                <span className="tag is-white m-1">Spesial</span>
                <span className="tag is-primary m-1">Promo</span>
              </div>
              <div className="content">
                Dalam nuansa yang memukau dan elegan, undangan pernikahan ini
                menghadirkan keindahan bunga biru yang melambangkan kedamaian
                dan keabadian cinta. Dengan desain yang menggabungkan estetika
                klasik dan sentuhan modern, setiap detailnya tersusun secara
                harmonis untuk menciptakan kesan yang mengesankan. Bunga biru
                yang dipilih dengan teliti terpampang indah di sepanjang
                undangan, menambahkan sentuhan keanggunan dan kelembutan. Warna
                biru yang dipilih memberikan nuansa kesegaran dan ketenangan,
                mencerminkan kebahagiaan dan kedamaian dalam pernikahan yang
                sakral ini. Setiap elemen dari font yang dipilih hingga tata
                letaknya dirancang untuk memberikan kesan yang mengundang dan
                mewah, sesuai dengan momen bersejarah ini. Undangan ini tidak
                hanya mempersiapkan para tamu untuk acara istimewa, tetapi juga
                mengabadikan keindahan cinta yang abadi yang akan dijalin oleh
                kedua mempelai. Mari bergabung dalam perayaan cinta sejati di
                antara bunga biru yang menawan ini, saat kedua hati bersatu
                dalam ikatan suci yang tak akan pernah pudar.
              </div>
              <MediaComponent
                username="Elisabeth Ririn Sugiarti"
                handle="ririn22"
                timeAgo="31m"
                content="Tema undangan pernikahan bunga biru benar-benar memukau! Kami sangat terkesan dengan desainnya yang elegan dan sentuhan modernnya. Bunga biru yang dipilih dengan teliti memberikan kesan yang sangat romantis dan memesona. "
                avatarUrl="https://skystatic08.atmos.id/34763/2012886732/2063127246/2051239710/Dwi%20%26%20Ririn%20001.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModalDetail;
