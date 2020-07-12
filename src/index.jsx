import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'github-markdown-css/github-markdown.css';

// import { importMDX, importMDX } from 'mdx.macro';

import IntroPage from "./other-pages/intro-page.mdx";

// const IntroPage = importMDX.sync('./other-pages/intro-page.mdx');

import chapterKeys, { requireAttempt } from "./chapterKeys";
import generateChapterPath from "./generateChapterPath";

import Sidebar from "./components/Sidebar";

import './content-style.css';

const sortedKeys = chapterKeys.slice();

console.log({ IntroPage });

function App() {
  // return (<div>
  {
    /* This is my app */
  }
  {
    /* </div>); */
  }

  return (
    <div className="d-flex">
      <Router>
        <Sidebar />
        <div className="markdown-body">
          <Switch>
            <Route path="/" exact>
              <IntroPage />
              {/* <h3>eyyyy</h3> */}
            </Route>
            <React.Suspense fallback={<div>Loading...</div>}>
              {sortedKeys.map((key) => {
                const ComponentForRoute = React.lazy(() => import(`./chapters/${key}.mdx`));
                return (
                <Route key={key} path={`/chapter/${key}`}>
                  <ComponentForRoute />
                </Route>
              )})}
            </React.Suspense>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
