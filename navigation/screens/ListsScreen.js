import React from "react";
import styled from "styled-components";
import Product from "../components/Product";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Texts = styled.Text``;

const ListsScreen = ({ navigation }) => (
  <Wrapper>
    <Texts>ovdje ide search bar za hranu koju imas u frizideru</Texts>
    <Product />
    <Product />
  </Wrapper>
);

export default ListsScreen;
