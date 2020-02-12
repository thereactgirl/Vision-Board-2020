import React from 'react';
import Nav from "./components/Nav";
import Board from './components/Board';
import {Route} from "react-router-dom";
import Form from './components/Form';
import './App.css';

// material ui
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Nav  />
      <Container>
        <Route exact path='/' component={Board} /> 
        <Route path='/addnewform' component={Form} />
          {/* <Board />
          <Form /> */}
      </Container>

    </div>
  );
}

export default App;
