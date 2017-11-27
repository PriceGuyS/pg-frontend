import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import Menu from './Menu';
import search from './queryTest';

class Main extends Component {	
    constructor() {
        super();
        this.state = {
            queryResult: []
        };
    }

    componentWillMount() {
      search("Banjo Kazooie").on('success', (res) => {
        this.setState({
          queryResult: res.data.Items
        });
      }).on('error', (err) => {
        console.log(err);
      });
    }
		
  render() {
    return (
      <div className="Main">	
				<header className="Main-header">
					<img src={logo} className="Main-logo" alt="logo" />
					<h1 className="Main-title">Welcome to PriceGuy$</h1>
				</header>
				<Menu/>
				<ul className="results">{this.state.queryResult.map((obj) => <div className="result"><li><img src={obj.imageURL} /></li>
          <li><h3>{JSON.stringify(obj.title)}</h3></li>
          <li><a href={obj.URL}> {obj.URL} </a></li>
          <li><p>{obj.price} {obj.currency}, location: {obj.country}, ships: {obj.shipsTo}</p></li></div>)}
        </ul>
			</div>
    );    
	}
}

export default Main;
