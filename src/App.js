import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import useMemoParent from "./Component/UseMemo/UseMemoParent";
import UseContext from "./Component/UseContext/UseContext";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/useMemo" component={useMemoParent} />
          <Route exact path="/useContext" component={UseContext} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
