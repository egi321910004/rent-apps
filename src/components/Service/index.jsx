import React from "react";

const ServicesSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="has-text-centered" id="services-text-container">
          <h1 className="title is-1">Alasan Kami Partner yang Tepat</h1>
          <h4
            className="subtitle mt-3"
            style={{ width: "80%", margin: "auto" }}
          >
            Dengan fokus pada kenyamanan, keamanan, dan kemudahan penggunaan,
            kami telah merancang solusi sewa aplikasi yang memungkinkan Anda
            untuk mengakses berbagai aplikasi berkualitas tanpa kerumitan.
          </h4>
        </div>
        <br />
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-innovative-idea-illustrated_52683-76699.jpg?t=st=1718436046~exp=1718439646~hmac=737b8b5b312b201883fb291725173a444a3aa0a0495571f77ea0cd88046571e0&w=996"
                    alt=""
                    className="w-100"
                  />
                </div>
                <h3
                  className="title is-3 has-text-centered"
                  id="card-product-description"
                >
                  Koleksi Aplikasi Premium
                </h3>
                <p className="has-text-centered">
                  Kami menyediakan akses eksklusif ke koleksi aplikasi premium
                  yang mencakup berbagai kategori, mulai dari produktivitas
                  hingga hiburan, dari kreativitas hingga keuangan. Dengan
                  berbagai pilihan, Anda dapat menemukan aplikasi yang sesuai
                  dengan kebutuhan Anda.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  {" "}
                  <img
                    src="https://img.freepik.com/free-vector/busy-professional-illustration_74855-2355.jpg?t=st=1718436166~exp=1718439766~hmac=7e7011cf78666e7a38a9ba8a5a99e6f825e203ac9b10b87b3d6769ca1aec7721&w=996"
                    alt=""
                    className="w-100"
                  />
                </div>
                <h3
                  className="title is-3 has-text-centered"
                  id="card-product-description"
                >
                  Fleksibilitas Berlangganan
                </h3>
                <p className="has-text-centered">
                  Kami memahami bahwa setiap pengguna memiliki preferensi yang
                  berbeda. Oleh karena itu, kami menawarkan beragam pilihan
                  paket berlangganan yang dapat disesuaikan dengan kebutuhan dan
                  anggaran Anda. Dari langganan bulanan hingga tahunan.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  {" "}
                  <img
                    src="https://img.freepik.com/free-vector/students-employees-adding-events-deadlines-calendar-app-young-people-using-time-organizer-planner-flat-illustration_74855-20735.jpg?t=st=1718436203~exp=1718439803~hmac=b33d072894ce73892ff1f93ec4229e251948a1d012172a628710cb3083636ace&w=996"
                    alt=""
                    className="w-100"
                  />
                </div>
                <h3
                  className="title is-3 has-text-centered"
                  id="card-product-description"
                >
                  Pembaruan Berkala
                </h3>
                <p className="has-text-centered">
                  Kami secara teratur memperbarui dan meningkatkan koleksi
                  aplikasi kami untuk memastikan bahwa Anda selalu mendapatkan
                  akses ke versi terbaru dan fitur terbaru. Dengan demikian,
                  Anda tidak akan ketinggalan dalam hal inovasi dan perkembangan
                  teknologi.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  {" "}
                  <img
                    src="https://img.freepik.com/free-vector/tiny-content-writers-creating-web-articles-flat-illustration_74855-15537.jpg?t=st=1718436453~exp=1718440053~hmac=f2dead2a821e6ede454a6e0bc3b680cd79c5c0ed5c6e4e13ac2970d2c288599b&w=996"
                    alt=""
                    className="w-100"
                  />
                </div>
                <h3
                  className="title is-3 has-text-centered mt-5"
                  id="card-product-description"
                >
                  Dukungan Pelanggan 24/7
                </h3>
                <p className="has-text-centered">
                  Tim dukungan pelanggan kami tersedia 24 jam sehari, 7 hari
                  seminggu, untuk membantu Anda dengan pertanyaan atau masalah
                  apa pun yang mungkin Anda miliki. Kami berkomitmen untuk
                  memberikan layanan yang responsif dan membantu setiap
                  langkahnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
