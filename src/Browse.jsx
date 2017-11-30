import React, { Component } from 'react';
import './Browse.css';
import search from './queryTest';

class Browse extends Component {
      constructor() {
        super();
        this.state = {
            queryResult: []
        };

    }

  searchBar() {
    var x = document.createElement('Input');
    x.setAttribute("type", "search");
    document.body.appendChild(x);
  }

  componentWillMount() {
    search("Banjo Kazooie").on('success', (res) => {
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
				<p>Browse me Bro!</p>
        <const bar={this.searchBar()}/>
        <ul className="results">{this.state.queryResult.map((obj) => <div2 className="result"><li><img src={obj.imageURL} alt="nop"/></li>
          <li><h3>{JSON.stringify(obj.title)}</h3></li>
          <li><a href={obj.URL}> {obj.URL} </a></li>
          <li><p>{obj.price} {obj.currency}, location: {obj.country}, ships: {obj.shipsTo}</p></li></div2>)}
        </ul>
			</div>
    );
	}
}
export default Browse;
