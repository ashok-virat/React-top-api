import React, { memo, Fragment } from "react";
import UseRefDom from "./useRefDom";

const UseMemoChild = memo((props) => {
  const { decreaseCount } = props;
  //memo component only render if the component props changes
  //see the console
  console.log("use memo child render");
  return (
    //Fragments let you group a list of children without adding extra nodes to the DOM.
    <Fragment>
            <h3>ChildComponent</h3>
      <p>
        we have used fragment for this use memo child component. Fragments let
        you group a list of children without adding extra nodes to the DOM.
      </p>
      <button onClick={decreaseCount}>decreaseParentCount</button>
      <br />
      <UseRefDom />
    </Fragment>
  );
});

export default UseMemoChild;
