// Import the necessary modules
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3001;
const reminderController = require('./reminderController');

// Parse JSON requests
app.use(express.json());

// Route to add reminders to the database
app.post('/api', reminderController.addReminder, (req, res) => {
  return res.status(200).json(res.locals.addedReminder);
});

// Route to retrieve reminders from the database
app.get('/api', reminderController.getReminder, (req, res) => {
  return res.status(200).json(res.locals.retrievedReminder);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../build')));

  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, '../build/index.html'));
  });
}

// Global error handler
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

// Start the server (if running locally, not on Vercel)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
}

// Export the app for vercel serverless functions
module.exports = app;
