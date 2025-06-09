import React from "react";
import "../styles/FishInfoModal.css";

function FishInfoModal({ fish, isCorrect, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        {/* Feedback Message */}
        {isCorrect ? (
          <p className="correct">✅ Correct! This is the {fish.name}.</p>
        ) : (
          <p className="incorrect">❌ Oops! This is the {fish.name}.</p>
        )}

        <img src={fish.image} alt={fish.name} className="modal-image" />
        <p className="fish-description">{fish.description}</p>
      </div>
    </div>
  );
}

export default FishInfoModal;
