// Import the necessary dependencies
import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import styles from './styles.scss';
import CountdownBody from './components/CountdownBody';

// Set up the React application by defining the App component, which will render the CountdownBody component
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <CountdownBody />
      </div>
    );
  }
}

// Create a ReactDOM root using the createRoot function
// The root variable represents the entry point for rendering the React application
// The App component is then rendered to the DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
