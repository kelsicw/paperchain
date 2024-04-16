// Import the necessary React components and the driver.js library
import React, { useEffect, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

// Define the UserTour component that will guide users through a tutorial on using the app
const UserTour = () => {
  // State to hold the driver.js object
  const [driverObj, setDriverObj] = useState(null);

  // Initialize the driver.js tour on component mount
  useEffect(() => {
    const initializeDriver = () => {
      // Create a new driver.js instance with custom configuration
      const newDriverObj = driver({
        // Driver.js configuration options
        showProgress: true,
        overlayColor: 'rgba(214, 214, 214, 0.75)',
        popoverClass: 'my-custom-popover-class',
        // Define each step of the tour with target elements and popover content
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
            element: '#forms-container',
            popover: {
              title: 'Customize Your Countdown',
              description: `Use this menu to customize your PaperChain countdown, set or update your intention, and add reminders.`,
              side: 'top',
              align: 'start',
              onPrevClick: () => {
                document.getElementById('menu-button').checked = false;
                newDriverObj.movePrevious();
              },
            },
          },
          {
            element: '#create-new-chain-form',
            popover: {
              title: 'Start A New Chain',
              description: `Enter the number of chain links you need on your chain (each link represents one week in your countdown), then click 'Create Chain'.`,
              side: 'top',
              align: 'start',
            },
          },
          {
            element: '#set-intention-form',
            popover: {
              title: 'Set Your Intention',
              description:
                'Setting an intention to focus on throughout your countdown will help you keep the big picture in mind.',
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
              side: 'top',
              align: 'start',
            },
          },
          {
            element: '#chain',
            popover: {
              title: 'Update Your Chain',
              description:
                'Click your PaperChain to remove a link as you complete each week of your countdown. Each link brings you one step closer to your goal!',
              side: 'left',
              align: 'start',
              onPrevClick: () => {
                document.getElementById('menu-button').checked = true;
                newDriverObj.movePrevious();
              },
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

    // Clean up the driver.js instance on component unmount
    return () => {
      if (driverObj) {
        driverObj.cleanup();
      }
    };
  }, []);

  // Handle the click event on the tour button (the question mark button)
  const handleClick = () => {
    if (driverObj) {
      driverObj.drive();
    }
  };

  // Render the tour button
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
