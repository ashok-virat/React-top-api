import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import useMemoParent from "./Component/UseMemo/UseMemoParent";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/useMemo" component={useMemoParent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
