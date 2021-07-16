import React from "react";

export default class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "test",
    };
  }

  changeValue = () => {
    this.setState({ ...this.state, name: "ashok" });
  };

  render() {
    return (
      <div>
        <h1>Class Based Component</h1>
        <p>{this.state.name}</p>
        <button onClick={this.changeValue}>CHange Value</button>
      </div>
    );
  }
}
