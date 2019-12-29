import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <h1>Step4:{props.name}</h1>
      <p>
        step3: There are three reasons why I prefer jogging to other sports.
      </p>
      <p>
        step3: I don’t have to exhaust myself or do excessive efforts while
        jogging.
      </p>
    </div>
  );
};

export default userOutput;
