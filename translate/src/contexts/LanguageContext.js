import React, { createContext, Component } from 'react';

const Context = React.createContext('english');

class LanguageStore extends Component {
  
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }
  
    render() {
        return (
         <Context.Provider value={{ ...this.state, onLanguageChange }} >
            {this.props.children}
         </Context.Provider>
        );
    }
}
