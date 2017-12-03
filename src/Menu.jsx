import React, { Component } from 'react';
import './Menu.css';
import Home from './Home';
import Browse from './Browse';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Menu extends Component {
  render() {
    return(
      <Router>
        <div>
          <button className="Menu-button" id="Home"><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link></button>
          <button className="Menu-button" id="Browse"><Link to="/browse" style={{ textDecoration: 'none', color: "white" }}>Browse</Link></button>
          <button className="Menu-button" id="About"><Link to="/about" style={{ textDecoration: 'none', color: "white" }}>About</Link></button>

          <Route exact path="/" component={Home}/>
          <Route path="/browse" component={Browse}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
};

export default Menu;
