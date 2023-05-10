import React from 'react';
import { render } from 'react-dom';
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

render(<App />, document.querySelector('#root'));
