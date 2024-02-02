import React from 'react';
import './App.css';
import {ThemeProvider } from '@mui/material';
import Theme from './theme/Theme';
import Todos from './pages/todos/Todos';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Todos/>
    </ThemeProvider>
  );
}

export default App;
