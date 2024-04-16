// Import the necessary React and JSConfetti libraries
import React from 'react';
import JSConfetti from 'js-confetti';

// Define the CompletedChain component
export const CompletedChain = (props) => {
  // Create a new JSConfetti instance to throw confetti when chain is complete
  const jsConfetti = new JSConfetti();

  // Add confetti animation to the page in varying colors
  jsConfetti.addConfetti({
    confettiColors: [
      '#cd7029',
      '#c77874',
      '#45a6ab',
      '#8cc7d0',
      '#c9e3e3',
      '#8f9261',
      '#db9828',
      '#db9828',
    ],
    confettiNumber: 400,
  });

  // Render the "Completed Chain" UI
  return (
    <div id="finished">
      <h2 id="finishedText">YOU MADE IT!</h2>
      <button
        className="main-button"
        id="restart-button"
        onClick={props.onRestart}
      >
        Start A New Chain
      </button>
    </div>
  );
};
