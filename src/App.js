import React, { Component } from 'react';
import InputForm from './Components/InputForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     <div className="Introduction"> <h1>This is a join-us statment</h1></div>
     <InputForm />
      </div>
    );
  }
}

export default App;
