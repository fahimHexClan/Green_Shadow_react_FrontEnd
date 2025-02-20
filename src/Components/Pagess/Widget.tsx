import React from "react";

interface WidgetProps {
  title: string;
  image: string;
  status: string;
}

const Widget: React.FC<WidgetProps> = ({ title, image, status }) => {
  return (
    <div className="widget">
      <h4>{title}</h4>
      <img src={image} alt={`${title} Icon`} />
      <p>{status}</p>
    </div>
  );
};

export default Widget;
