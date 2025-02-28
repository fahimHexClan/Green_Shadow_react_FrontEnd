import React from "react";
import Widget from "../Pagess/Widget";
import Chart from "../Pagess/chart";
import fieldImage from "../../assets/crop1.jpg";
import HeaderContent from "../HeaderContent/HeaderContent";
import BodyContent from "../BodyContent/BodyContent";
import "./pagesCss/DashBoard.css";
import Login from "./Login";


const Dashboard: React.FC = () => {
    return (
      <>

<div className="app-container">

<HeaderContent />
<BodyContent>
      
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
      </BodyContent>
      </div>
      </>
    );
  };
  
  export default Dashboard;
