import React from "react";
import FooterCSS from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={`${FooterCSS.footerContainer} ${FooterCSS.text}`}>
      Discover. Watch. Enjoy.
    </div>
  );
};

export default Footer;
