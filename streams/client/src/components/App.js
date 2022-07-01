import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <br />
            <br />
            <button>Click Me!</button>
        </div>
    );
};



function App() {
  return (
    <div>
        <BrowserRouter>
            <div>
            <Route path = "/" exact component = {PageOne} />
            <Route path ="/pagetwo" component={PageTwo} />
            </div>
        </BrowserRouter>
    </div>
  );
};

export default App;