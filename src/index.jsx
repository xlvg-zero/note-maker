import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { Chapter1Doc } from "./chapters/chapters.jsx";

function App() {
  // return (<div>
  {
    /* This is my app */
  }
  {
    /* </div>); */
  }

  return (
    <BrowserRouter>
      <div className="markdown-body">
        <Switch>
          <Route path="/">
            <Chapter1Doc />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
