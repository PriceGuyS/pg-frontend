import React, { Component } from 'react';
import './Home.css';

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
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search for games" value={this.state.value} onChange={this.handleChange} className="input-field"/>
            <input type="submit" value="Search" id="submit-button"/>
          </form>
			</div>
    );
	}
}
export default Home;
