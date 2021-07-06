import React from "react";
import UseContextChild from "./UseContextChild";
import MyContext from "./UseContextParent";
const UseContext = () => {
  // Use the Provider to make a value available to all
  // children and grandchildren
  const value = {
    value: 40,
    name: "useContext",
  };

  return (
    <MyContext.Provider value={value}>
      <div>
        <UseContextChild />
      </div>
    </MyContext.Provider>
  );
};

export default UseContext;
