import React, { Component } from 'react';
import routes from './routes.js';
import logo from './logo.svg';
import './App.css';

import Bin from './components/Bin'


export default class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shelfie</h1>
        </header>
        


        {routes}
      </div>
      
    );
  }
}

