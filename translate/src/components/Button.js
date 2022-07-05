import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Button extends Component {

  renderSubmit(value) {
    return value  === 'english' ? 'Submit' : 'Pesh Garnuhos';
  }
//   static contextType = LanguageContext; // don use with consumer property
  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'Pesh Garnuhos';
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
