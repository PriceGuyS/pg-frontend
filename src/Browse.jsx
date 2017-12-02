import React, { Component } from 'react';
import './Browse.css';
import search from './queryTest';
import {Button} from 'reactstrap';

var Remarkable = require('remarkable');

class Browse extends Component {
      constructor(props) {
        super(props);
				this.handleChange = this.handleChange.bind(this);
        this.submitChange = this.submitChange.bind(this);
				this.state = {
						value: "",
            click: "",
						//value: "Banjo Kazooie",
            queryResult: []

				};
      }

	handleChange(e) {
    this.setState({ value: e.target.value });
		//this.componentWillMount();
  }
  submitChange(e) {
    this.setState({ click: this.state.value });
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

  componentDidUpdate() {
		search(this.state.click).on('success', (res) => {
		//search(this.state.value.toString).on('success', (res) => {
      this.setState({
        queryResult: res.data.Items.sort(function(a, b) {
          return parseFloat(a.price) - parseFloat(b.price);
        })
      });
      console.log(queryResult)
    }).on('error', (err) => {
      console.log(err);
    });

  }

  render() {
    return(
      <div className="Browse">
      <ul className="results">
        <input onChange={this.handleChange}
        /> <Button onClick={this.submitChange}>Search</Button>
        {this.state.queryResult.slice(0,10).map((obj) => <div className="result" key={obj.id}><li><img src={obj.imageURL} alt="nop"/></li>
          <li><h3>{JSON.stringify(obj.title)}</h3></li>
          <li><a href={obj.URL}> {obj.URL} </a></li>
          <li><p>{obj.price} {obj.currency}, location: {obj.country}, ships: {obj.shipsTo}</p></li></div>)}
        </ul>
			</div>
    );
	}
}

//ReactDOM.render(<Browse />, document.getElementById('example'));
export default Browse
