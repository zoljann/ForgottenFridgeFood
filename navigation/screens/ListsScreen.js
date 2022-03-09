import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Menu from "../components/Menu";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-default";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Texts = styled.Text``;
const MenuItems = styled.View`
  align-items: center;
`;

const ListsScreen = ({ navigation }) => (
  <Wrapper>
    <SearchBar
      inputStyle={{ backgroundColor: "white" }}
      containerStyle={{
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 40,
        height: 42,
        justifyContent: "center",
        marginBottom: 10,
      }}
      placeholderTextColor={"green"}
      placeholder={"Search for food"}
    />
    <Product />
    <Product />
    <MenuItems>
      <Menu />
    </MenuItems>
  </Wrapper>
);

export default ListsScreen;
