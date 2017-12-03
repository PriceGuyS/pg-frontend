import React, { Component } from 'react';
import photo from './images/group_photo.png';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">	
					<pheader className = "About-pheader">
					  <p>The Guys!</p>
						<img src={photo} className="Group-photo" alt="group_photo" />
					</pheader>
			</div>
    );
	}
}
export default About;
