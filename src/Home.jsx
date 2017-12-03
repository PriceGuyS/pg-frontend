import React, { Component } from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

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
          <Container className="items-container">
          <Row>
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
			</div>
    );
	}
}

export default Home;
