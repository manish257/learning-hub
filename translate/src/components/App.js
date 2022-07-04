import React, { Component } from "react";
import UserCreate from "./UserCreate";

export class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag np"
            onClick={() => this.onLanguageChange("nepali")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
 