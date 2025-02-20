import React from 'react';
import Links from './Components/Links/Links';
import BodyContent from './Components/BodyContent/BodyContent';
import Widget from "./Components/Pagess/Widget";
import Chart from "./Components/Pagess/chart";
import fieldImage from "../src/assets/crop1.jpg";

import './App.css';
import HeaderContent from './Components/HeaderContent/HeaderContent';

function App() {
  return (
    <div className="app-container">
    <HeaderContent/>
      <BodyContent>
      <div className="app-container">
      
      <div className="main-content">
      <h1 className='head'>Green Shadow Crop Monitoring Dashboard</h1>
        <p className="header-subtitle">
          Manage your fields, crops, staff, vehicles, and equipment efficiently.
        </p>
        <div className="widgets-container">
          <Widget title="Fields" image={fieldImage} status="10 Fields Active" />
          <Widget title="Crops" image={fieldImage} status="20 Crops Planted" />
          <Widget title="Staff" image={fieldImage} status="15 Staff Working" />
          <Widget title="Vehicles" image={fieldImage} status="8 Vehicles Operational" />
          <Widget title="Equipment" image={fieldImage} status="30 Equipment Available" />
          <Widget title="Monitoring Logs" image={fieldImage} status="12 Logs Recorded" />
        </div>
        <div className="charts-container">
          <Chart title="Crop Growth Stats" />
          <Chart title="Equipment Usage"  />
        </div>
      </div>
    </div>
      </BodyContent>
    </div>
  );
}

export default App;
