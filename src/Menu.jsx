import React, { Component } from 'react';
import './Menu.css';
import Home from './Home.jsx'
import Browse from './Browse.jsx'
import About from './About'

class Menu extends Component {
  render() {
    return(
      <div>
        <button className="Menu-button" id="Home">Home</button>
        <button className="Menu-button" id="Browse">Browse</button>
        <button className="Menu-button" id="About">About</button>
      </div>
    );
  }
};
export default Menu;
