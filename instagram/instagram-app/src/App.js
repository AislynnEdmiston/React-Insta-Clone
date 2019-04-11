import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Header from './componets/HeaderContainer/Header'

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
