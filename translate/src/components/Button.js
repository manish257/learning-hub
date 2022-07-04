import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Button extends Component {
//   static contextType = LanguageContext; // don use with consumer property
  render() {
    // console.log(this.context);
    const text = this.context === 'english' ? 'Submit' : 'Pesh Garnuhos';
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
