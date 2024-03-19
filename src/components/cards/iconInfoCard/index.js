import React from "react";
import "./styles.scss";

const IconInfoCard = ({ imageUrl, number, text }) => {
  return (
    <div className="image-container">
      <div className="circle">
        <img className="circleIcon" src={imageUrl} alt={"img"} />
      </div>
      <h1 className="cardNumber">{number}</h1>
      <p className="cardText">{text}</p>
    </div>
  );
};

export default IconInfoCard;
