import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="columns is-justify-content-center">
          <div className="column is-9-desktop is-10-tablet">
            <div className="block has-text-centered">
              <h1 className="mb-5">
                Mengakselerasi Transformasi Digital untuk Bisnis Anda <br />
              </h1>
              <p
                className="mb-6"
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                RentApps merupakan platform yang menyediakan layanan software
                house dan aplikasi sewa untuk mendukung transformasi digital dan
                solusi bisnis di sektor Teknologi Informasi.
              </p>

              <a className="button is-success ">
                <FaWhatsapp /> Konsultasi Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
