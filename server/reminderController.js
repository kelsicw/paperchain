// this brings in the models file for the access point to my database
const db = require('./paperchainModels');
const format = require('pg-format');

const reminderController = {};

reminderController.addReminder = (req, res, next) => {
  console.log('*** Entered the addReminder controller ***');

  const { reminder } = req.body;
  console.log('reminder: ', reminder);
  const sqlString = `INSERT INTO reminders (reminder_text) VALUES ('${reminder}')`;
  db.query(sqlString)
    .then((response) => {
      console.log('REMINDER ADDED!');
      next();
    })
    .catch((error) => {
      console.log(error);
      return next({ error });
    });
};

module.exports = reminderController;
