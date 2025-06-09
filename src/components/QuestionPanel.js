import React from "react";
import "../styles/QuestionPanel.css";

function QuestionPanel({ fishName }) {
  return (
    <div className="question-panel">
      <p>
        Can you find the <strong>{fishName}</strong>?
      </p>
    </div>
  );
}

export default QuestionPanel;
