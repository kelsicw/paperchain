const db = require('./paperchainModels');
const format = require('pg-format');

const reminderController = {};

reminderController.addReminder = (req, res, next) => {
  const { reminder } = req.body;
  res.locals.addedReminder = reminder;
  const sqlString = `INSERT INTO reminders (reminder_text) VALUES ('${reminder}')`;
  db.query(sqlString)
    .then((response) => {
      return next();
    })
    .catch((error) => {
      console.log(error);
      return next({ error });
    });
};

reminderController.getReminder = (req, res, next) => {
  const sqlString = `SELECT reminder_text FROM reminders ORDER BY RANDOM() LIMIT 1`;
  db.query(sqlString)
    .then((response) => {
      res.locals.retrievedReminder = response.rows[0].reminder_text;
      return next();
    })
    .catch((error) => {
      console.log(error);
      return next({ error });
    });
};

module.exports = reminderController;
