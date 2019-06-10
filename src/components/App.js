import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../index.css"
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer/>
        <Button/>
      </div>
    );
  }
}
 
export default App;













/*
import React from 'react';
import Login from './Login/Login'; //components
import './App.css'; //CSS



function App() {
  const myName = 'Carla'
  return (
    <div className="App">
      <Login name={myName}/>
    </div>
  );
}

export default App;
*/
