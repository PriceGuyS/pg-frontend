import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="HOME">				
				<img src={logo} className="Home-logo" alt="logo" />
				<h1 className="Home-title">Welcome to PriceGuy$</h1>
				<div id="Home" className="tabcontent">					
					<header className="Home-header">
						<h3>HOME</h3>
					</header>
					<p>HOME is where the heart is, and the heart is in gaming.</p>
					<p className="Home-intro">
						To get started, click Query and submit your choices.
					</p>
				</div>
			</div>
    );
	}
}
export default Home;
