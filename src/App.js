import React from 'react';
import './App.css';
import { Data } from "./components/Data/data";
import { Navbar } from "./components/Navbar/navbar";

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Data />
    </div>
  );

};

export default App;
