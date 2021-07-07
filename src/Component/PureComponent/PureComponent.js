import React, { useState, useRef } from "react";

class ChildComponent extends React.PureComponent {
  render() {
    console.log("pure component render");
    return (
      <div>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

const PureComponent = () => {
  const reference = useRef();
  const [state, setState] = useState({
    count: 0,
  });

  console.log("parent component render");

  const increasecount = () => {
    if (state.count === 5) {
      reference.current.style.color = "blue";
    }
    setState({ count: state.count + 1 });
  };

  return (
    <div>
      <h2>PureComponent</h2>
      <p>
        If you want React to treat a functional component as a pure component,
        you’ll have to convert the functional component to a class component
        that extends React.PureComponent
      </p>
      <span ref={reference}>{state.count}</span>
      <button onClick={increasecount}>increasecount</button>
      <ChildComponent value="see the console you only see the parent component render"></ChildComponent>
    </div>
  );
};

export default PureComponent;
