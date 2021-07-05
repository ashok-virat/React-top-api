import React, { useState, useCallback } from "react";
import UseMemoChild from "./UseMemoChild";

const useMemoParent = () => {
  console.log("usememo parent render");
  const [count, setCount] = useState({
    count: 0,
    message: "hi ashok",
  });

  const increaseCount = () => {
    setCount({ ...count, count: count.count + 1 });
  };

  //This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
  const decreaseCount = useCallback(() => {
    setCount((count) => ({ count: count.count - 1 }));
  }, []);

  return (
    <div>
      <h1>Count:{count.count}</h1>
      <button onClick={increaseCount}>InCrease Count</button>
      <UseMemoChild decreaseCount={decreaseCount}></UseMemoChild>
    </div>
  );
};

export default useMemoParent;
