import React from "react";
import HigherOrder from "./HigherOrder";

const GrandChild = (props) => {
  return (
    <div className="message-container">
      {props.data}
      <p>"{props.text}"</p>
      <div className="details-container">
        <small>
          Sent by <b>{props.sentBy}</b>
        </small>
        {props.button}
      </div>
    </div>
  );
};

const messages = [
  {
    text: "I love pepperoni pizza 🍕",
    sentBy: "Billy",
  },
  {
    text: "Hello World! 🌏",
    sentBy: "Chris",
  },
  {
    text: "Hi there 🙋 how are you?",
    sentBy: "Courtney",
  },
];

const ChildComponent = () => {
  //Higher Order is a component,i have sended this grandChild component as a input that higher order component return new component
  const HigherOrderComponent = HigherOrder(GrandChild);
  return (
    <div>
      <h4>used higher order component below</h4>
      {messages.map((key, index) => (
        <HigherOrderComponent
          text={key.text}
          sentBy={key.sentBy}
          index={index}
        ></HigherOrderComponent>
      ))}
    </div>
  );
};

export default ChildComponent;
