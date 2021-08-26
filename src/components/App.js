import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import PollFunction from "./PollFunction";

function App() {
  return (
    <Router>
    <div className="app">
      <div className="app-header">
      <Link to="/">
      Election Poll
       </Link>
      </div>

      <Switch>
       <Route exact path="/" component={PollFunction} />
       
      </Switch>
      
    </div>
    </Router>
  );
}




export default App;
