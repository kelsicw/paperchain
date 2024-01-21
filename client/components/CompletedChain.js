import React from 'react';
import JSConfetti from 'js-confetti';

export const CompletedChain = (props) => {
  const jsConfetti = new JSConfetti();

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
