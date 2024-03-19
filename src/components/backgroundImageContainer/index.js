import React from "react";

const BackgroundImageContainer = ({ imageUrl, children }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw", // 100% del ancho de la ventana del navegador
    height: "calc(100vh - 100px)", // 100% de la altura de la ventana del navegador menos 200px
    display: "flex",
    justifyContent: "center", // Centra horizontalmente el contenido
    alignItems: "center", // Centra verticalmente el contenido
  };

  return <div style={containerStyle}>{children}</div>;
};

export default BackgroundImageContainer;
