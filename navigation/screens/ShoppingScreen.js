import React from "react";
import { AsyncStorage } from "react-native";
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";
import styled from "styled-components";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Texts = styled.Text``;

const ShoppingScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <SearchBar placeholder="cao" />
      <Texts></Texts>
    </Wrapper>
  );
};

export default ShoppingScreen;
