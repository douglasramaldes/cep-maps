import React, { Component } from "react";
import Icon from "../../components/icon";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #ccc;
  padding: 1rem 2rem;
  position: relative;
  width: 90%;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  cursor: pointer;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: true
    };
  }

  handleClick = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <Container>
        <IconContainer>
          <Icon name="x" size={35} onClick={this.handleClick} />
        </IconContainer>
        {this.props.children}
      </Container>
    );
  }
}

export default Card;
