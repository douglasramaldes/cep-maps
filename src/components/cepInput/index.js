import React, { Component } from "react";
import { isValidCep, formatCep } from "../../helpers/cep";

import styled from "styled-components";

const Button = styled.button`
  background-color: #48a3ea;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: steelBlue;
    color: white;
  }
`;

const Input = styled.input`
  padding: 0.2rem 0.5rem;
  height: 2.1rem;
  color: #333;
  margin-right: 0.6rem;
  border: none;
  border: solid 1px #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  color: #333;
  padding-right: 1rem;
`;

class CepInput extends Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  handleSubmit = () => {
    if (isValidCep(formatCep(this.props.value))) {
      this.props.onSubmit(formatCep(this.props.value));
    }
  };

  render() {
    return (
      <div>
        <Label>CEP</Label>
        <Input
          id="CepFormInput"
          type="text"
          value={formatCep(this.props.value)}
          onChange={this.handleChange}
          placeholder="00000-000"
          maxLength="9"
          pattern="^\d{5}-\d{3}$"
        ></Input>
        <Button onClick={this.handleSubmit}>Buscar</Button>
      </div>
    );
  }
}

export default CepInput;
