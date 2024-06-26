import React from "react";
import "./Card.css";

const Card = ({ title, content, className, image, redirection, NewsDate ,NewsMonth}) => {
  return (
    <div className={className}>
      <div className="card-bodi">
        {NewsDate && <div className="CardDate"><h4>{NewsDate}</h4><h5>{NewsMonth}</h5></div>}
        {image && <img src={image} alt={title} className="card-image" />}
        {title && <h2 className="card-titlez">{title}</h2>}
        {content && <p className="card-contentz">{content}</p>}
        {redirection && (
          <h6>
            <a href={redirection}>READ MORE</a>
          </h6>
        )}
      </div>
    </div>
  );
};

export default Card;
