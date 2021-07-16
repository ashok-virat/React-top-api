import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div>
      <h1> React Top Level Api</h1>
      <div>
        <ul>
          <li>
            {" "}
            <Link
              to="/useMemo"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
              className={"changeColor"}
            >
              usememo and usecallback
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/useContext"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
              className={"changeColor"}
            >
              useContext
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/useReducer"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
              className={"changeColor"}
            >
              useReducer
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/higherOrder"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
              className={"changeColor"}
            >
              higherOrder
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/pureComponent"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
              className={"changeColor"}
            >
              PureComponent
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/classcomponent"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
              className={"changeColor"}
            >
              ClassComponent
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
