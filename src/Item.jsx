import React, { Component } from 'react';
import './Item.css';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';
import ebayLogo from './images/ebay.png';
import amazonLogo from './images/amazon.jpg';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfo: this.props.location.state.itemData
    };
  }

  render() {
    return(
      <Container className="Item">
        <Row>
            <Col>
              <p>{this.state.gameInfo.title}</p>
              <img src={this.state.gameInfo.amazon.imageURL === "N/A" ? this.state.gameInfo.ebay.imageURL : this.state.gameInfo.amazon.imageURL} className="Group-photo" alt="group_photo"/>
            </Col>
            <Col>
              <ButtonGroup vertical className="Options">
                <a href={this.state.gameInfo.ebay.URL}>
                  <button className="button-1">
                  <img alt="ebay logo" src={ebayLogo} className="ebay-logo" align="left"/>
                    Condition: {this.state.gameInfo.ebay.condition}
                    <p>
                      Price: ${parseFloat(this.state.gameInfo.ebay.price).toFixed(2)}
                    </p>
                  </button>
                </a>
                <a href={this.state.gameInfo.amazon.URL}>
                  <button className="button-1">
                    <img alt="amazon logo" src={amazonLogo} className="amazon-logo" align="left"/>
                    Condition: {this.state.gameInfo.amazon.condition}
                    <p>
                      Price: ${this.state.gameInfo.amazon.price}
                    </p>
                  </button>
                </a>
              </ButtonGroup>
            </Col>
        </Row>
      </Container>
    );
  }
};

export default Item;
