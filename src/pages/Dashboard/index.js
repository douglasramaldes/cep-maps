import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Iframe from "react-iframe";
import Card from "../../components/card";
import CepSearch from "../../components/cepSearch";
import CepInput from "../../components/cepInput";
import Address from "../../components/address";
import styled from "styled-components";
import fetchJsonp from "fetch-jsonp";
import { isValidCep } from "../../helpers/cep";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivFindCep = styled.div`
  width: 90%;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxIframe = styled(Iframe)`
  border: 0;
  height: 90%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const DivIframe = styled.div`
  overflow: hidden;
  padding-top: 40.25%;
  position: relative;
`;

function getAddressByCep(value) {
  return fetchJsonp(
    `https://viacep.com.br/ws/${value}/json/?callback=searchCep`
  );
}

class FindCep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      address: "",
      cep: "",
      showCard: false,
      notFound: false
    };
    this.currentCep = null;
  }

  handleClose = () => {
    this.setState({ showCard: false, value: "", notFound: false });
  };

  handleCepChange = value => {
    this.setState({ value });
  };

  validationCep = value => {
    if (isValidCep(value) && value !== this.currentCep) {
      this.currentCep = value;

      getAddressByCep(value)
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.erro) this.setState({ notFound: true });
          this.setState({ showCard: true, address: data });
        })
        .catch(err => {});
    }
  };

  handleSubmit = value => {
    this.setState({ notFound: false });
    this.validationCep(value);
  };

  render() {
    return (
      <Container>
        <DivFindCep>
          <CepSearch title="Consultar">
            <CepInput
              value={this.state.value}
              onChange={this.handleCepChange}
              onSubmit={this.handleSubmit}
            />
          </CepSearch>
          {this.state.showCard && (
            <Card showCard={this.state.showCard} handleClose={this.handleClose}>
              <Address
                address={this.state.address}
                notValid={this.state.notFound}
              ></Address>
              <DivIframe>
                <BoxIframe
                  url={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBxp983W4Ppj3r0d6JPBDNkZa2XmHVAeHc&q=${this.state.address.logradouro} ${this.state.address.bairro} ${this.state.address.localidade} ${this.state.address.uf}`}
                  id="myId"
                  display="block"
                />
              </DivIframe>
            </Card>
          )}
        </DivFindCep>
      </Container>
    );
  }
}

export default withRouter(FindCep);
