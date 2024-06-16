import React from "react";
import "./Share.css";
import ShareImage from "../../../images/images/shareImage.png";

function Share() {
  return (
    <div className="container">
      <div className="share-wrapper">
      <h3>Share Price</h3>
      <div className="ShareImage-conatiner">
        <img src={ShareImage} alt="share" />
      </div>
      </div>
    </div>
  );
}

export default Share;
