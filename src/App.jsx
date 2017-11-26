import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import search from './queryTest';

class App extends Component {
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
            <div className="App">
				        <header className="App-header">
					           <img src={logo} className="App-logo" alt="logo" />
					           <h1 className="App-title">Welcome to PriceGuy$</h1>
				        </header>
                <Menu />
                <ul>{this.state.queryResult.map((obj) => <li><img src={obj.imageURL} />{JSON.stringify(obj.title)}</li>)}</ul>
			      </div>
        );
	   }
}

export default App;
