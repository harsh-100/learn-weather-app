import React from "react";

const ChildComponent = ({ number, handleFunc }) => {
  console.log("Child rendered");

  console.log(number);
  return (
    <>
      <h1>Child COmponent : {number}</h1>
    </>
  );
};

export default React.memo(ChildComponent);
