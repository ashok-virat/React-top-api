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
      message:
        count.count === 3 ? "see the console _use memo called_" : "hi ashok",
    });
  };

  //This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
  const decreaseCount = useCallback(() => {
    setCount((count) => ({
      count: count.count - 1,
      message:
        count.count === 3 ? "see the console _use memo called_" : "hi ashok",
    }));
  }, []);

  //useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result.
  const getCount = useMemo(() => {
    console.log("usememo called");
    return <p>{count.message}</p>;
  }, [count.message]);

  return (
    <div>
      <h1>Count:{count.count}</h1>
      <h3 style={{ color: "red" }}>{getCount}</h3>
      <button onClick={increaseCount}>InCrease Count</button>
      <UseMemoChild decreaseCount={decreaseCount}></UseMemoChild>
    </div>
  );
};

export default useMemoParent;
