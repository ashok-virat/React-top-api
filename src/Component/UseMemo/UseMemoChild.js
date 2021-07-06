import React, { memo } from "react";

const UseMemoChild = memo((props) => {
  const { decreaseCount } = props;
  //memo component only render if the component props changes
  //see the console
  console.log("use memo child render");
  return (
    <div>
      <h3>ChildComponent</h3>
      <button onClick={decreaseCount}>decreaseParentCount</button>
    </div>
  );
});

export default UseMemoChild;
