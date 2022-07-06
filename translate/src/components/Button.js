import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export class Button extends Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Pesh Garnuhos";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
    );
  }
  //   static contextType = LanguageContext; // don use with consumer property
  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'Pesh Garnuhos';
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
