import React from 'react';
import './Card.css'; 

const Card = ({ title, content, className }) => { 
  return (
    <div className={className} >
      <div className="card-bodi">
        {title && <h2 className="card-titlez">{title}</h2>}
        {content && <p className="card-contentz">{content}</p>}
      </div>
    </div>
  );
};

export default Card;
