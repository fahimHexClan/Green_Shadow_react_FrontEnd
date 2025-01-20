import React from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";

const BogPage: React.FC = () => {
  return (
    <div>
      <HeaderContent />
      <BodyContent>
        <h3>Bog Page</h3>
      </BodyContent>
    </div>
  );
};

export default BogPage;
