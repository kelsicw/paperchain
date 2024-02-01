import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import styles from './styles.scss';
import CountdownBody from './components/CountdownBody';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <CountdownBody />
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
