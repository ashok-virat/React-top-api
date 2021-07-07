import React, { useState, useCallback, useMemo, useRef } from "react";
import UseMemoChild from "./UseMemoChild";

const useMemoParent = () => {
  console.log("usememo parent render");
  const [count, setCount] = useState({
    count: 0,
    message: "hi ashok",
  });

  //use ref updates.does not trigger the component re render
  const referenceValue = useRef(0);

  const handleUseRef = () => {
    referenceValue.current++;
    console.log(`use ref value updated ${referenceValue.current} clicked`);
  };

  const increaseCount = () => {
    setCount({
      ...count,
      count: count.count +1,
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
      <h5>we have used usememo and usecallback in this component</h5>
      <h1>Count:{count.count}</h1>
      <h3 style={{ color: "red" }}>{getCount}</h3>
      <button onClick={increaseCount}>InCrease Count</button>
      <br></br>
      <button onClick={handleUseRef} style={{ marginTop: "10px" }}>
        useref(see the console)
      </button>
      <UseMemoChild decreaseCount={decreaseCount}></UseMemoChild>
    </div>
  );
};

export default useMemoParent;
