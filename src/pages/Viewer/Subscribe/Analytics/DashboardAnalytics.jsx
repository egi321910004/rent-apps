import React, { useEffect, useState } from "react";
import PerformanceCard from "./components/ChartAnalystics";
import CardTop3Viewer from "./components/3CardAnl";
import MediaComponent from "../../../Template/components/Comment";
import { FaFileDownload } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import Barcode from "react-barcode";
import QRCode from "qrcode";
import ChatBotComponent from "../../../../components/utils/Chatbox";

export default function DashboardAnalytics() {
  const [src, setSrc] = useState();
  useEffect(() => {
    QRCode.toDataURL("Test").then(setSrc);
  }, []);
  return (
    <div>
      <CardTop3Viewer />
      <PerformanceCard />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }} className="p-2">
          <MediaComponent
            username="Rangga Wisnu"
            handle="GanggaPacul"
            timeAgo="31m"
            content="Selamat menikmati setiap langkah indah dalam perjalanan kehidupan baru kalian. Semoga cinta dan kebahagiaan selalu menyertai pernikahan kalian. Selamat menikah, semoga menjadi awal yang penuh berkat untuk kisah cinta abadi!"
            avatarUrl="https://pbs.twimg.com/profile_images/1764972534439759872/iwAc7SO2_400x400.jpg"
          />
          <MediaComponent
            username="Magdalena Putri Shamaron"
            handle="Magdalena11"
            timeAgo="31m"
            content="Dengan penuh sukacita kami mengucapkan selamat menikah untuk kedua mempelai! Semoga setiap hari yang kalian jalani bersama dipenuhi dengan kebahagiaan, cinta, dan kesetiaan. Semoga pernikahan ini membawa berkah dan keberuntungan dalam setiap langkah perjalanan hidup kalian. Selamat menempuh kehidupan baru yang penuh dengan cinta dan kebahagiaan!"
            avatarUrl="https://cdn0-production-images-kly.akamaized.net/08F_is7qoifsQ9Kt35K4nkcTkGA=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4576996/original/041747100_1694772650-4.jpg"
          />
          <MediaComponent
            username="Ayu Lestari"
            handle="yuyu222"
            timeAgo="31m"
            content="Selamat menikmati setiap momen indah dalam perjalanan kehidupan baru kalian sebagai suami istri. Semoga cinta yang kalian miliki hari ini terus berkembang dan menjadi lebih kuat dari sebelumnya. Semoga pernikahan ini memberikan kebahagiaan dan keberuntungan yang berlimpah. Selamat menikah dan selamat membangun masa depan yang penuh dengan kasih sayang dan kebahagiaan bersama!"
            avatarUrl="https://cdn.antaranews.com/cache/1200x800/2022/04/22/IMG20220419141148-01.jpeg"
          />
        </div>
        <div style={{ width: "50%" }} className="card p-2">
          <div>
            <button className="button is-success m-2">
              <FaFileDownload /> Download Report
            </button>
            <button className="button is-success is-outlined m-2">
              <SiMicrosoftexcel /> Download Attendance
            </button>
          </div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <input
              className="input mt-2"
              disabled
              type="text"
              placeholder="Text input"
              value={4400191442}
              style={{ width: "50%" }}
            />
            <div className="select m-2">
              <select disabled>
                <option>BCA</option>
                <option>Ws</option>
              </select>
            </div>
          </div>
          <img src={src} alt="barcode" style={{ width: "30%" }} />
        </div>
      </div>
      <ChatBotComponent />
    </div>
  );
}
