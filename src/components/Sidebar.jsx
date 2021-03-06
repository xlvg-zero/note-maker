import React from 'react';
import { Link } from 'react-router-dom';

import chapterKeys from '../chapterKeys';
import generateChapterPath from '../generateChapterPath';

import './side-bar.css';

const ChapterLink = ({ chapterNumber }) => (
  <Link className="list-group-item list-group-item-action bg-light" to={generateChapterPath(chapterNumber)}>Chapter {chapterNumber}</Link>
)

function Sidebar() {
  return (
    <div>
      {/* <!-- Sidebar --> */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Chapters</div>
        <div className="list-group list-group-flush">
          <Link key='/' className="list-group-item list-group-item-action bg-light" to='/'>Introduction</Link>
          {chapterKeys.map((chapterNumber) => (
            <ChapterLink key={chapterNumber} chapterNumber={chapterNumber} />
            // <Link key={key} className="list-group-item list-group-item-action bg-light" to={generateChapterPath(key)}>Chapter {key}</Link>
          ))}
          {/* <a href="#" className="list-group-item list-group-item-action bg-light">
            Dashboard
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light">
            Shortcuts
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light">
            Overview
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light">
            Events
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light">
            Profile
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light">
            Status
          </a> */}
        </div>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}
    </div>
  );
}

export default Sidebar;
