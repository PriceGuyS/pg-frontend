import React, { Component } from 'react';
import './Search.css';
import search from './queryTest';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.state.searchQuery,
      results: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    search("EbayAndAmazon", this.state.value)
        .on('success', (res) => {
          this.setState((prevState, props) => {
            if(prevState) {
              if (res.data.Items.length > 0) {
                var info = prevState.results.concat(res.data.Items[0])
                return {
                  results: info
                };
              }
            } else {
              return {};
            }
          });
        })
        .on('error', (err) => {

          console.log(err);
        });
  }

  handleClick(event, data) {
    this.props.history.push({
      pathname: '/item',
      search: '?id=' + data.amazon.id,
      state: { itemData: data }
    });
  }

  render() {
    console.log(this.state.results)
    return(
      <div className="SearchResults">
          <p className="search-prompt">Showing {this.state.results.length} Result(s) for {this.state.value}:</p>
          {this.state.results.map((result, index) =>
            <button className="result" key={index} onClick={(e) => this.handleClick(e, result)}>
              <img alt="amazon logo" src={result.amazon.imageURL === "N/A" ? result.ebay.imageURL : result.amazon.imageURL} className="result-photo" align="left"/>
              <p className="game-title">{result.title}</p>
              <p className="lowest-price">Lowest Price: ${Math.min(parseFloat(result.amazon.price), parseFloat(result.ebay.price)).toFixed(2)}</p>
            </button>
          )}
			</div>
    );
	}
}

export default Search;
