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
        steps: [
          {
            element: '#menu-button',
            popover: {
              title: 'Get Started',
              description: `Click the plus sign to create your paperchain countdown, set your intention, and add encouraging reminders. Then, click 'Next'!`,
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
              title: 'Import the Library',
              description:
                'It works the same in vanilla JavaScript as well as frameworks.',
              side: 'bottom',
              align: 'start',
            },
          },
          {
            element: '#set-intention-form',
            popover: {
              title: 'Importing CSS',
              description:
                'Import the CSS which gives you the default styling for popover and overlay.',
              side: 'bottom',
              align: 'start',
            },
          },
          {
            element: '#add-reminder-form',
            popover: {
              title: 'Create Driver',
              description:
                'Simply call the driver function to create a driver.js instance',
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
              title: 'Start Tour',
              description:
                'Call the drive method to start the tour and your tour will be started.',
              side: 'left',
              align: 'start',
            },
          },
          {
            element: '#current-week',
            popover: {
              title: 'More Configuration',
              description:
                'Look at this page for all the configuration options you can pass.',
              side: 'right',
              align: 'start',
            },
          },
          {
            popover: {
              title: 'Happy Coding',
              description:
                'And that is all, go ahead and start adding tours to your applications.',
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
