import React, { memo } from "react";

const UseMemoChild = memo((props) => {
  const { message } = props;
  //memo component only render if the component props changes
  //see the console
  console.log("use memo child render");
  return <div>{message}</div>;
});

export default UseMemoChild;
