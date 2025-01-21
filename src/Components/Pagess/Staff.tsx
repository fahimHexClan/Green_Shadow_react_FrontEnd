import React from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";

const Staff: React.FC = () => {
  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h3>Staff</h3>
      </BodyContent>
    </div>
  );
};

export default Staff;
