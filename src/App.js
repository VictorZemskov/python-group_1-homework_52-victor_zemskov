import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
        <body>
          <header className="header">
              <div className="container">
                  <div className="title" id="title_name">
                  </div>
                  <nav className="menu" id="menu_nav">
                  </nav>
              </div>
          </header>
          <div className="container box">
            <div className="sidebar" id="sidebar">
            </div>
            <div className="content" id="content_id">
            </div>
          </div>
          <div className="futer" id="futer_id">
          </div>
        </body>
    );
  }
}

export default App;
