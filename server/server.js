const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

const reminderController = require('./reminderController');

// Do I need to parse JSON from incoming request?
app.use(express.json());

app.post('/api', reminderController.addReminder, (req, res) => {
  return res.status(200);
});

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
