import React from "react";
import smeAwards from "../../assets/sme-awards.png";
import atsiDigitalIcon from "../../assets/atsi_digital_icon.png";
import iec29110 from "../../assets/IEC_29110.png";
import iso27001 from "../../assets/iso_27001.png";
import sslEncryption from "../../assets/ssl-encryption.png";
import dbd from "../../assets/dbd.png";
import depa from "../../assets/depa.png";
const Footer = () => {
  return (
    <footer className="footer" style={{ margin: "auto" }}>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <img
          className="img-icon-footer"
          src={smeAwards}
          alt="SMEs Excellence Awards 2020"
        />
        <img className="img-icon-footer" src={atsiDigitalIcon} />
        <img className="img-icon-footer" src={iec29110} />
        <img className="img-icon-footer" src={iso27001} />
        <img className="img-icon-footer" src={sslEncryption} />
        <img className="img-icon-footer" src={dbd} />
        <img className="img-icon-footer" src={depa} />
      </div>
      <hr></hr>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <b>Copyright © 2024 RentApps.</b> All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
