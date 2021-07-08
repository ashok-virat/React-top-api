import React from "react";

//this is higher order component,it taks component as a input and return to the new component
const HigherOrder = (ChildComponent) => {
  const NewComponent = (props) => {
    return <ChildComponent {...props} />;
  };
  return NewComponent;
};

export default HigherOrder;
