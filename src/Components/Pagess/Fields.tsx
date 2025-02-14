import React from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";

const Fields: React.FC = () => {
  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h3>Field</h3>
      </BodyContent>
    </div>
  );
};

export default Fields;
