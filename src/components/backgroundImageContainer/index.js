import React from "react";

const BackgroundImageContainer = ({ imageUrl, children }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "calc(100vh - 100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={containerStyle}>{children}</div>;
};

export default BackgroundImageContainer;
