import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Gallary from '../components/Gallery';
import NotFoundPage from '../components/NotFoundPage';
import Navbar from '../components/Nav/Navbar';
import Form from '../components/Form';
import Board from '../components/Board';
import {Container} from '@material-ui/core';

const AppRouter = () => (
  <BrowserRouter>
    <div>
       <Container>
       <Navbar />
        <Route path='/addnewform' component={Form} />
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={Gallary} path="/gallery" />
          <Route component={NotFoundPage} />

         {/* <Route exact path='/' component={Board} />  */}


        <Form /> 
        </Switch>
      </div>
       </Container>
    </div>
  </BrowserRouter>
);

      
export default AppRouter;