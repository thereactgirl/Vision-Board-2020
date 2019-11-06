import React from 'react';
import Nav from "./components/Nav";
import Board from './components/Board';
import {Route} from "react-router-dom";
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav  />
      <Route path='/' Component={Board} /> 
      <Route path='/addnewvision' Component={Form} />
        {/* <Board />
        <Form /> */}
    </div>
  );
}

export default App;
