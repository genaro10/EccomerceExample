import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import Options from './Componentes/Options';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Options/>
      </Container>
    </div>
  );
}

export default App;
