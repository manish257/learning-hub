import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return( 
        <div>
            PageOne
            {/* BAD */}
            <a href='/pagetwo'>
                Navigate to PAGE TWO
            </a>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <br />
            <br />
            <button>
            {/* BAD */}
                <a href='/'>
                    Navigate to PAGE ONE
                </a>
            </button>
            
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