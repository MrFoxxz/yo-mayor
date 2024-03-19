import React from "react";
import "./styles.scss";
import { Button } from "@mui/material";

const HomeImgCard = ({ imageUrl, buttonText, text, onClick }) => {
  return (
    <div className="containerStyle">
      <img src={imageUrl} alt="Imagen" className="imageStyle" />
      <p className="textStyle">{text}</p>
      <Button onClick={() => onClick()} variant="contained">
        {buttonText}
      </Button>
    </div>
  );
};

export default HomeImgCard;
