import React from "react";
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";
import styled from "styled-components";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Texts = styled.Text``;

const ShoppingScreen = ({ navigation }) => (
  <Wrapper>
    <SearchBar placeholder="cao" />
    <Texts>ovdje ce ici lista za shopping slican fazon kao i lists</Texts>
  </Wrapper>
);

export default ShoppingScreen;
