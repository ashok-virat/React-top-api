import React, { useContext, memo } from "react";
import MyContext from "./UseContextParent";
import UseContextGrandChildrenfrom from "./UseContextGrandChildren";

const UseContextChild = memo(() => {
  console.log("child Component render");
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  const value = useContext(MyContext);
  return (
    <div>
      <h3>ChildComponent</h3>
      props passed via {value.name} and value is {value.value}.
      <UseContextGrandChildrenfrom></UseContextGrandChildrenfrom>
    </div>
  );
});

export default UseContextChild;
