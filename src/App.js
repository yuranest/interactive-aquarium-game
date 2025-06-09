import React, { useState } from "react";
import Aquarium from "./components/Aquarium";
import QuestionPanel from "./components/QuestionPanel";
import FishInfoModal from "./components/FishInfoModal";
import { fishList } from "./data/fishData";
import "./styles/App.css";

function App() {
  // Helper to get a random fish
  const getRandomFish = () =>
    fishList[Math.floor(Math.random() * fishList.length)];

  const [selectedFish, setSelectedFish] = useState(null);
  const [targetFish, setTargetFish] = useState(getRandomFish());
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelectFish = (fish) => {
    setSelectedFish(fish);
    setIsCorrect(fish.id === targetFish.id);
  };

  const handleCloseModal = () => {
    setSelectedFish(null);
    setIsCorrect(null);
    setTargetFish(getRandomFish());
  };

  return (
    <div className="App">
      <h1>What kind of fish do you see in Aquarium?</h1>
      <QuestionPanel fishName={targetFish.name} />
      <Aquarium fishList={fishList} onSelectFish={handleSelectFish} />
      {selectedFish && (
        <FishInfoModal
          fish={selectedFish}
          isCorrect={isCorrect}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
