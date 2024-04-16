// Import the database connection
const db = require('./paperchainModels');

// The reminderController contains the methods that query the database
const reminderController = {};

// The addReminder method adds a reminder provided by the user to the database
reminderController.addReminder = (req, res, next) => {
  const { reminder } = req.body;
  res.locals.addedReminder = reminder;
  const sqlString = `INSERT INTO reminders (reminder_text) VALUES ($1)`;
  db.query(sqlString, [reminder])
    .then((response) => {
      return next();
    })
    .catch((error) => {
      return next({ error });
    });
};

// The getReminder method retrieves a random reminder from the database. If no reminders have been added, it will send a message back to the client encouraging the user to add reminders.
reminderController.getReminder = (req, res, next) => {
  const sqlString = `SELECT reminder_text FROM reminders ORDER BY RANDOM() LIMIT 1`;
  db.query(sqlString)
    .then((response) => {
      if (response.rows.length === 0) {
        res.locals.retrievedReminder = `You haven't added any reminders. Take a moment to give yourself some encouragement by adding a reminder!`;
      } else {
        res.locals.retrievedReminder = response.rows[0].reminder_text;
      }
      return next();
    })
    .catch((error) => {
      return next({ error });
    });
};

module.exports = reminderController;
