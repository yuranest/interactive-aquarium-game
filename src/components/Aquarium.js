import React from "react";
import FishCard from "./FishCard";
import "../styles/Aquarium.css";

function Aquarium({ fishList, onSelectFish }) {
  return (
    <div className="aquarium-container">
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
