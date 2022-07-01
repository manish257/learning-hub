import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return( 
        <div>
            PageOne
            <Link to='/pagetwo'>
                Navigate to PAGE TWO
            </Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <br />
            <button>
                <Link to='/'>
                    Navigate to PAGE ONE
                </Link>
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