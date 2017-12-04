import React, { Component } from 'react';
import groupPhoto from './images/group_photo.png';
import gitLogo from './images/github.svg';
import './About.css';
import { Container, Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <Container className="About">
        <Row>
						<Col>
              <p>The Guys!</p>
              <img src={groupPhoto} className="Group-photo" alt="group_photo"/>
            </Col>
            <Col>
              <p className="About-intro">Welcome to PriceGuy$, a place where you can find your most desired games, at the best price! With PriceGuy$, you can search and browse games with their varying prices from different online sources.</p>
            </Col>
        </Row>
        <Row className="find-row">
          <Col className="some-col">
            <p>Find us here:</p>
            <a href="https://github.com/PriceGuyS">
              <img src={gitLogo} alt="PriceGuyS Github" className="git-logo"/>
            </a>
          </Col>
        </Row>
			</Container>
    );
	}
}
export default About;
