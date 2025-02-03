import React from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";

const Vehicles: React.FC = () => {
  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h3>Vehicle</h3>
      </BodyContent>
    </div>
  );
};

export default Vehicles;
