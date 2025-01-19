import React from 'react';

function BodyContainer(props: any) {
  return (
    <div className="main-content">
      <h1>{props.children}</h1>
    </div>
  );
}

export default BodyContainer;