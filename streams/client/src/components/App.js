import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const PageOne = () => {
//     return(
//         <div>
//             PageOne
//             <Link to='/pagetwo'>
//                 Navigate to PAGE TWO
//             </Link>
//         </div>
//     );
// };

// const PageTwo = () => {
//     return (
//         <div>
//             PageTwo
//             <br />
//             <button>
//                 <Link to='/'>
//                     Navigate to PAGE ONE
//                 </Link>
//             </button>
//         </div>
//     );
// };
