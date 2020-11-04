import React from "react";

const Clockhand = (props) => {
  const tf = {
    transform: `translateY(-50%) rotate(${props.rotate * 6 - 90}deg)`,
  };

  return <div className={`hand ${props.name}`} style={tf} />;
};

export default Clockhand;
