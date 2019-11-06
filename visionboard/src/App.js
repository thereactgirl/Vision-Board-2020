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
      <Route exact path='/' component={Board} /> 
      <Route path='/addnewform' component={Form} />
        {/* <Board />
        <Form /> */}
    </div>
  );
}

export default App;
