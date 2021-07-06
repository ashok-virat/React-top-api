import React, { useContext } from "react";
import MyContext from "./UseContextParent";

const UseContextChild = () => {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  const value = useContext(MyContext);
  return (
    <div>
      props passed via {value.name} and value is {value.value}.
    </div>
  );
};

export default UseContextChild;
