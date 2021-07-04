import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          height: "60px",
          marginTop: "0",
        }}
      >
        <ul>
          <li
            style={{
              cursor: "pointer",
              listStyleType: "none",
              verticalAlign: "middle",
              paddingTop: "18px",
            }}
          >
            {" "}
            <Link
              to="/useMemo"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              useMemo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
