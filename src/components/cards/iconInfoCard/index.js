import React from "react";
import "./styles.scss";
import { Box } from "@mui/material";

const IconInfoCard = ({ imageUrl, number, text }) => {
  return (
    <div className="image-container">
      <Box
        sx={{
          boxShadow: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#000" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          p: 1,
          m: 1,
          borderRadius: 50,
          width: "60px",
          height: "60px",
          textAlign: "center",
          marginBottom: "-30px",
          zIndex: 1000,
        }}
      >
        <img className="circleIcon" src={imageUrl} alt={"img"} />
      </Box>
      <Box
        sx={{
          boxShadow: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#000" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: "center",
          width: '150px',
        }}
      >
        <h1 className="cardNumber">{number}</h1>
        <p className="cardText">{text}</p>
      </Box>
    </div>
  );
};

export default IconInfoCard;
