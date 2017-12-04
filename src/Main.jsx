import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import Menu from './Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import About from './About';
import Item from './Item';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="Main">
				    <header className="Main-header">
					       <img src={logo} className="Main-logo" alt="logo" />
					       <h1 className="Main-title">Welcome to PriceGuy$</h1>
				    </header>
				    <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path="/browse" component={Browse}/>
            <Route path="/about" component={About}/>
            <Route path="/item" component={Item}/>
		   </div>
     </Router>
    );
	}
}

export default Main;
