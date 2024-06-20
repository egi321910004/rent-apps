import { useEffect } from "react";
import img1 from "../../assets/jos2.svg";
const AboutSectionTwo = () => {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);
  return (
    <section className="box py-16 md:py-20 lg:py-28 ">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap items-center ">
          <div className="w-full px-4 lg:w-1/2 ">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src={img1}
                alt="about image"
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <img
                src={img1}
                alt="about image"
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Kemudahan Penggunaan
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Template kami dirancang untuk meminimalkan hambatan teknis,
                  sehingga Anda dapat fokus pada strategi dan eksekusi.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Desain Profesional
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Setiap template kami memiliki desain yang menarik dan
                  responsif, memastikan bahwa bisnis Anda tampil profesional di
                  mata pelanggan dan mitra.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Fleksibilitas dan Kustomisasi
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Sesuaikan template sesuai dengan kebutuhan bisnis Anda. Kami
                  menyediakan opsi kustomisasi yang luas untuk memastikan bahwa
                  setiap solusi yang kami tawarkan sesuai dengan visi dan tujuan
                  bisnis Anda..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
