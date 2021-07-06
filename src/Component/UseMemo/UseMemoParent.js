import React, { useState, useCallback, useMemo } from "react";
import UseMemoChild from "./UseMemoChild";

const useMemoParent = () => {
  console.log("usememo parent render");
  const [count, setCount] = useState({
    count: 0,
    message: "hi ashok",
  });

  const increaseCount = () => {
    setCount({
      ...count,
      count: count.count + 1,
      message: count.count === 3 ? "see the console _use memo called_" : count.message,
    });
  };

  //This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
  const decreaseCount = useCallback(() => {
    setCount((count) => ({ count: count.count - 1 }));
  }, []);

  //useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result.
  const getCount = useMemo(() => {
    console.log("usememo called");
    return <div>{count.message}</div>;
  }, [count.message]);

  return (
    <div>
      <h1>Count:{getCount}</h1>
      <button onClick={increaseCount}>InCrease Count</button>
      <UseMemoChild decreaseCount={decreaseCount}></UseMemoChild>
    </div>
  );
};

export default useMemoParent;
