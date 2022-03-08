import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Menu from "../components/Menu";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Texts = styled.Text``;
const MenuItems = styled.View`
  align-items: center;
  margin-top: 120%;
`;

const ListsScreen = ({ navigation }) => (
  <Wrapper>
    <Texts>ovdje ide search bar za hranu koju imas u frizideru</Texts>
    <Product />
    <Product />
    <MenuItems>
      <Menu />
    </MenuItems>
  </Wrapper>
);

export default ListsScreen;
