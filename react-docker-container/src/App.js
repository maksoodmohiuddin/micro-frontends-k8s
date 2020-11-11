import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           A React Micro-Frontend Container App deployed in Kubernates as Docker Container 
        </p>

      </header>
    </div>
  );
}

export default App;
