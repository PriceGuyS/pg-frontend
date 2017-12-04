import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return(
        <div>
          <button className="Menu-button" id="Home"><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link></button>
          <button className="Menu-button" id="Browse"><Link to="/browse" style={{ textDecoration: 'none', color: "white" }}>Browse</Link></button>
          <button className="Menu-button" id="About"><Link to="/about" style={{ textDecoration: 'none', color: "white" }}>About</Link></button>
        </div>
    );
  }
};

export default Menu;
