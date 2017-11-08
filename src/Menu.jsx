import React, { Component } from 'react';
import './Menu.css';
// import Home from './Home'
// import Query from './Query'
// import About from './About'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
				<div id="home" className="tabcontent">
					<header className="Home-header">
						<h3>HOME</h3>
					</header>
					<p>HOME is where the heart is, and the heart is in gaming.</p>
					<p className="Home-intro">
						To get started, click Query and submit your choices.
					</p>
				</div>
				<button className="tablink" id="defaultOpen">Home</button>
				<button className="tablink">Browse</button>
				<button className="tablink">About</button>
      </div>
    );
	}
}

export default Menu;
