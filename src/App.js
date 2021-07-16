import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import useMemoParent from "./Component/UseMemo/UseMemoParent";
import UseContext from "./Component/UseContext/UseContext";
import UseReducerParent from "./Component/UseReducer/UseReducer";
import ChildComponent from "./Component/HigherOrderComponent/ChildComponent";
import PureComponent from "./Component/PureComponent/PureComponent";
import ClassComponent from "./Component/ClassComponent/ClassComponent";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/useMemo" component={useMemoParent} />
          <Route exact path="/useContext" component={UseContext} />
          <Route exact path="/useReducer" component={UseReducerParent} />
          <Route exact path="/higherOrder" component={ChildComponent} />
          <Route exact path="/pureComponent" component={PureComponent} />
          <Route exact path="/classcomponent" component={ClassComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
