import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: '/search',
      search: '?query=' + this.state.value,
      state: { searchQuery: this.state.value }
    });
  }

  render() {
    return(
      <div className="SB">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search for games" value={this.state.value} onChange={this.handleChange} className="input-field"/>
            <input type="submit" value="Search" id="submit-button"/>
          </form>
			</div>
    );
	}
}

export default SearchBar;
