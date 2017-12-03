import React, { Component } from 'react';
import './Home.css';
import SearchBar from './SearchBar';

class Home extends Component {
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
    alert('LUL SAME: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <div className="Home">
					<p>HOME is where the heart is, and the heart is in gaming.</p>
					<p className="Home-intro">
						To get started, click Query and submit your choices.
					</p>
          <SearchBar />
			</div>
    );
	}
}

export default Home;
