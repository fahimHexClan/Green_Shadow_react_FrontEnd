import React from 'react';
import Links from './Components/Links/Links';
import BodyContent from './Components/BodyContent/BodyContent';
import './App.css';
import HeaderContent from './Components/HeaderContent/HeaderContent';

function App() {
  return (
    <div className="app-container">
    <HeaderContent/>
      <BodyContent>
        <h1>Home</h1>
        <p>Welcome to the Home Page!</p>
      </BodyContent>
    </div>
  );
}

export default App;
