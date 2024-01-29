import React, { useEffect, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const UserTour = () => {
  const [driverObj, setDriverObj] = useState(null);

  useEffect(() => {
    const initializeDriver = () => {
      const newDriverObj = driver({
        showProgress: true,
        overlayColor: 'rgba(214, 214, 214, 0.75)',
        popoverClass: 'my-custom-popover-class',
        steps: [
          {
            element: '#menu-button',
            popover: {
              title: 'Get Started',
              description: `Click the plus sign to create a new PaperChain countdown, set your intention, and add encouraging reminders.`,
              onNextClick: () => {
                document.getElementById('menu-button').checked = true;
                newDriverObj.moveNext();
              },
              side: 'left',
              align: 'start',
            },
          },
          {
            element: '#create-new-chain-form',
            popover: {
              title: 'Start A New Chain',
              description: `Enter the number of chain links you need on your chain, then click 'Create Chain'.`,
              side: 'right',
              align: 'start',
            },
          },
          {
            element: '#set-intention-form',
            popover: {
              title: 'Set Your Intention',
              description:
                'Setting an intention to focus on throughout your countdown will help you stay focused on the big picture.',
              side: 'top',
              align: 'start',
            },
          },
          {
            element: '#add-reminder-form',
            popover: {
              title: 'Add Reminders',
              description:
                'Add some kind words and encouragement for the moments when you need support along the way!',
              onNextClick: () => {
                document.getElementById('menu-button').checked = false;
                newDriverObj.moveNext();
              },
              side: 'bottom',
              align: 'start',
            },
          },
          {
            element: '#chain',
            popover: {
              title: 'Update Your Chain',
              description:
                'Click your PaperChain to remove a link. Each link brings you one step closer to your goal!',
              side: 'left',
              align: 'start',
            },
          },
          {
            element: '#current-week',
            popover: {
              title: 'Keep Track Of Your Progress',
              description: `See how far you've come and how much you have left to go right here in your tracker.`,
              side: 'right',
              align: 'start',
            },
          },
          {
            popover: {
              title: `You're all set!`,
              description: `Let the countdown begin! If you need some encouragement along the way, click the "Need a reminder?" button to cheer yourself on. You've got this!`,
            },
          },
        ],
      });
      setDriverObj(newDriverObj);
    };

    initializeDriver();

    return () => {
      if (driverObj) {
        driverObj.cleanup();
      }
    };
  }, []);

  const handleClick = () => {
    if (driverObj) {
      driverObj.drive();
    }
  };

  return (
    <>
      <button
        id="tour-button"
        className="secondary-button"
        onClick={handleClick}
      >
        ?
      </button>
    </>
  );
};

export default UserTour;
