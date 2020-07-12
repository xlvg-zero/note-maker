import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// import { importMDX, importMDX } from 'mdx.macro';

import IntroPage from "./other-pages/intro-page.mdx";

// const IntroPage = importMDX.sync('./other-pages/intro-page.mdx');

import chapterKeys from "./chapterKeys";
import generateChapterPath from "./generateChapterPath";

import Sidebar from "./components/Sidebar";

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
      <BrowserRouter>
        <Sidebar />
        <div className="markdown-body">
          <Switch>
            <Route path="/">
              <IntroPage />
              {/* <h3>eyyyy</h3> */}
            </Route>
            <React.Suspense fallback={<div>Loading...</div>}>
              {sortedKeys.map((key) => {
                return (
                <Route key={key} path={generateChapterPath(key)}>
                  {React.lazy(() => import(`./chapters/${key}.mdx`))}
                </Route>
              )})}
            </React.Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
