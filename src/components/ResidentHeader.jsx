import React from "react";
import "./styles/ResidentHeader.css"
import fondo from "../../public/images/headerImage.jpg";
import title from "../../public/images/headerTitle.png";

const ResidentHeader = () => {
  return (
    <header className="header">
      <div className="headerImgFondo">
        <img src={fondo} alt="" />
      </div>
      <div className="headerImgTitle">
        <img src={title} alt="" />
      </div>
    </header>
  );
};

export default ResidentHeader;
