import React, { useState, useCallback } from "react";
import UseContextChild from "./UseContextChild";
import MyContext from "./UseContextParent";

const UseContext = () => {
  const [count, setCount] = useState({
    count: 0,
  });

  const increaseCount = useCallback(() => {
    setCount((count) => ({
      count: count.count + 1,
    }));
  }, []);

  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <MyContext.Provider value={{ name: "useContext", value: count.count }}>
      <div style={{ top: "50%", left: "50%", width: "100%" }}>
        <article>
          we have passed the data to the all children and grandchildren using
          createContext and useContext
        </article>
        <h1>HomeComponent</h1>
        <button onClick={increaseCount} style={{ marginTop: "15px" }}>
          IncreaseCount
        </button>
        <div>
          <UseContextChild />
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default UseContext;
