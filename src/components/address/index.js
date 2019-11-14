import React from "react";
import styled from "styled-components";

const ContainerAddress = styled.div`
  line-height: 0.6;
`;

const AddressLogradouro = styled.h2`
  margin: 1%;
`;

const AddressInfos = styled.p`
  margin: 1%;
  line-height: 1;
`;

export default function Address(props) {
  return (
    <ContainerAddress>
      {props.notValid && (
        <AddressLogradouro>CEP não encontrado</AddressLogradouro>
      )}
      <AddressLogradouro>{props.address.logradouro}</AddressLogradouro>
      <AddressInfos>{props.address.bairro}</AddressInfos>
      <AddressInfos>
        {" "}
        {props.address.localidade} - {props.address.uf}
      </AddressInfos>
      <AddressInfos>{props.address.cep}</AddressInfos>
    </ContainerAddress>
  );
}
