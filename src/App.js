import React from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store';
import { UPDATE_COUNT } from './duck';
import { createAction } from './dorothy/utils';

function App({count}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type='button' 
          onClick={() => store.dispatch(createAction(UPDATE_COUNT, count + 1))}>
            Increase
        </button>
        <span>{count}</span>
      </header>
    </div>
  );
}

export default connect(state => ({
  count: state.count
}))(App);
