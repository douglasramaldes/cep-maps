import React, { Component } from "react";
import styled from "styled-components";

const ContainerSearch = styled.div`
  background-color: #eee;
  padding: 1rem 2rem;
  margin-bottom: 0.4rem;
  width: 90%;
`;

const Title = styled.h2`
  margin-bottom: 1.4rem;
`;

class CepSearch extends Component {
  render() {
    return (
      <ContainerSearch>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </ContainerSearch>
    );
  }
}
export default CepSearch;
