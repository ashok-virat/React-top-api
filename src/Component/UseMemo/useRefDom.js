import React, { useRef } from "react";

const UseRefDom = () => {
  const elementRef = useRef();
  const inputRef = useRef();

  const focusTheButton = () => {
    inputRef.current.focus();
    elementRef.current.style.backgroundColor = "blue";
  };

  console.log("use ref Dom component render");

  return (
    <div style={{ marginTop: "20px" }} ref={elementRef}>
      <h3> use Ref Dom </h3>
      <br />
      <p>
        click the focus the input button.you can the backgroud color of div and
        focus the input using useRefEf
      </p>
      <input ref={inputRef}></input>
      <button onClick={focusTheButton}>Focus The Input</button>
    </div>
  );
};

export default UseRefDom;
