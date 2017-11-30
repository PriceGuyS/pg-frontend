import React, { Component } from 'react';
import './Browse.css';
import search from './queryTest';

var Remarkable = require('remarkable');

class Browse extends Component {
      constructor(props) {
        super(props);
				this.handleChange = this.handleChange.bind(this);
				this.state = {
						value: "Browse me Bro!",
						//value: "Banjo Kazooie",
            queryResult: []

				};
      }

	handleChange(e) {
    this.setState({ value: e.target.value });
		//this.componentWillMount();
  }

	getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
	
  searchBar() {
    var x = document.createElement('Input');
    x.setAttribute("type", "search");
    document.body.appendChild(x);
  }

  componentWillMount() {
		search("Banjo Kazooie").on('success', (res) => {
		//search(this.state.value.toString).on('success', (res) => {
      this.setState({
        queryResult: res.data.Items.sort(function(a, b) {
          return parseFloat(a.price) - parseFloat(b.price);
        })
      });
      console.log(this.state.queryResult)
    }).on('error', (err) => {
      console.log(err);
    });

  }

  render() {
    return(
      <div className="Browse">
        <input
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <ul className="results">{this.state.queryResult.map((obj) => <div2 className="result"><li><img src={obj.imageURL} alt="nop"/></li>
          <li><h3>{JSON.stringify(obj.title)}</h3></li>
          <li><a href={obj.URL}> {obj.URL} </a></li>
          <li><p>{obj.price} {obj.currency}, location: {obj.country}, ships: {obj.shipsTo}</p></li></div2>)}
        </ul>
			</div>
    );
	}
}

//ReactDOM.render(<Browse />, document.getElementById('example'));
export default Browse
