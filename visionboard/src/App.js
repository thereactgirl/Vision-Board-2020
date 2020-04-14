import React from 'react';
import Board from './components/Board';
import {Route} from "react-router-dom";
import Form from './components/Form';
import './App.css';

// material-ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

//components 
import VisionDrawer from './components/Nav/VisionDrawer';
import Navbar from './components/Nav/Navbar';


const theme = createMuiTheme({
  typography: {
      fontFamily: 'Poppins',
  },
  //   spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  spacing: 4,
  palette: {
      type: 'dark',
      primary: {
          // light: will be calculated from palette.primary.main,
          // main: '#ed6e01',
          // main: '#1B1B1B',
          // main: '#333333',
          // main: '#FF931E',
          main: '#01C99F',
          // secondary: '#333333',
          error: '#DB4437', // error google red color
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
          // light: '#0066ff',
          // main: '#404040',
          // main: '#333333',
          main: '#3A81EB',
          // dark: will be calculated from palette.secondary.main,p
          // contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      // contrastThreshold = 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      // tonalOffset: 0.2,
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>

      {/* <VisionDrawer /> */}
      <Navbar />
      <Container>

        <Route exact path='/' component={Board} /> 
        <Route path='/addnewform' component={Form} />
          {/* <Board />
          <Form /> */}
      </Container>

    </ThemeProvider >
  );
}

export default App;
