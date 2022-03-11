import React, { useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Menu from "../components/Menu";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-default";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Wrapper = styled.View`
  padding: 15% 2% 0 2%;
`;
const ProductContainer = styled.View``;
const Texts = styled.Text``;
const MenuItems = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 150%;
`;
const ListsScreen = ({ navigation }) => {
  return (
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
        placeholderTextColor={"#479FEC"}
        placeholder={"Do i have.."}
      />
      <ProductContainer>
        <Product foodName="Milk" foodExpireDate="13.2.2019" />
        <Product foodName="Eggs" foodExpireDate="13.2.2019" />
        <Product foodName="Pizza" foodExpireDate="13.2.2019" />
      </ProductContainer>
      <MenuItems>
        <Menu />
      </MenuItems>
    </Wrapper>
  );
};
export default ListsScreen;
