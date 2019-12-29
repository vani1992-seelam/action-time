import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  // step5 add state
  state = {
    userName: "Raghav"
  };

  // step6 Adding event handler
  userNameChangeHandler = event => {
    console.log("Testing");
    // step 8 name must be overwritten by new user name
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        {/* step7 paasing event-handler method refrence to the userInput element */}
        {/* step9 adding two-way-binding to the userInput element */}
        <UserInput
          changed={this.userNameChangeHandler}
          currentName={this.state.userName}
        />
        <UserOutput name={this.state.userName} />
        <UserOutput name="bob" />
      </div>
    );
  }
}

export default App;
