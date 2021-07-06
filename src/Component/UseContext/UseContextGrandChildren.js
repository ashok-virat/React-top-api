import React, { useContext } from "react";
import MyContext from "./UseContextParent";

const UseContextGrandChildren = () => {
  const context = useContext(MyContext);
  console.log("use grand children render");
  return (
    <div>
      <h4>GrandChildren</h4>
      <p>{context.value}</p>
    </div>
  );
};

export default UseContextGrandChildren;
