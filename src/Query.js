import React, { Component } from 'react';
import './Query.css';
//import './queryTest.js';
//var test = require('./queryTest.js');

class Query extends Component {
  render() {
    return (
      <div className="Query">
				<header className="Query-header">
					<div id="Query" className="tabcontent">
						<h1 className="Query-title">Query$</h1>
						<h3>QUERY</h3>
						<p>Query me Bro!</p>
					</div>
				</header>
			</div>
    );
	}
}
export default Query;
