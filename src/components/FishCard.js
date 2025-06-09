import React, { useEffect, useState } from "react";
import "../styles/FishCard.css";

function FishCard({ fish, onClick }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const top = Math.random() * 80; // % from top
    const left = Math.random() * 80; // % from left
    const duration = 5 + Math.random() * 5;

    setStyle({
      top: `${top}%`,
      left: `${left}%`,
      animationDuration: `${duration}s`,
    });
  }, []);

  return (
    <div className="fish-card swim" style={style} onClick={onClick}>
      <img
        src={fish.image}
        alt={fish.name}
        className={`fish-image ${fish.id === "shark" ? "shark-size" : ""}`}
      />{" "}
    </div>
  );
}

export default FishCard;
