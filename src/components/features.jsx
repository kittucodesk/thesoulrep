import React from "react";
import "./features.css";

export const Features = (props) => {

  const catalogs = [
    {
      title: "TIS",
      description: "This is the first catalog.",
      imageUrl: "images/headerimage.jpg" 
    },
    {
      title: "Calmfloor",
      description: "Game-changing active floor vibration control is here",
      imageUrl: "images/calmfloor.png", 
    },
  ];
  return (
    <div className="catalog-grid" style={{marginTop: "150"}} >
      {catalogs.map((catalog, index) => (
        <div key={index} className="catalog-item">
          <img src={catalog.imageUrl} alt={catalog.title} className="catalog-image" />
          <h3>{catalog.title}</h3>
          <p>{catalog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
