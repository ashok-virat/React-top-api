import React from "react";

//this is higher order component,it taks component as a input and return to the new component
const HigherOrder = (ChildComponent) => {
  const NewComponent = (props) => {
    const data = (
      <div>
        <p>send some data using this new component</p>
      </div>
    );
    return <ChildComponent data={data} {...props}></ChildComponent>;
  };
  return NewComponent;
};

export default HigherOrder;
