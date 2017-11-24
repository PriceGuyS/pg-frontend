import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import Menu from './Menu';

class Main extends Component {	
  render() {
    return (
      <div className="Main">	
				<header className="Main-header">
					<img src={logo} className="Main-logo" alt="logo" />
					<h1 className="Main-title">Welcome to PriceGuy$</h1>
				</header>
				<Menu/>
			</div>
    );    
	}
}

export default Main;
