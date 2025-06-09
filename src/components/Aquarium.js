import React from "react";
import FishCard from "./FishCard";
import "../styles/Aquarium.css";

function Aquarium({ fishList, onSelectFish }) {
  return (
    <div
      className="aquarium-container"
      style={{
        backgroundImage:
          "url('/interactive-aquarium-game/assets/aquarium-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {fishList.map((fish) => (
        <FishCard
          key={fish.id}
          fish={fish}
          onClick={() => onSelectFish(fish)}
        />
      ))}
    </div>
  );
}

export default Aquarium;
