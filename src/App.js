import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import useMemoParent from "./Component/UseMemo/UseMemoParent";
import UseContext from "./Component/UseContext/UseContext";
import UseReducerParent from "./Component/UseReducer/UseReducer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/useMemo" component={useMemoParent} />
          <Route exact path="/useContext" component={UseContext} />
          <Route exact path="/useReducer" component={UseReducerParent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
