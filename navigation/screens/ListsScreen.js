import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Menu from "../components/Menu";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-default";

const Wrapper = styled.View`
  padding: 15% 2% 0 2%;
`;
const Container = styled.View`
  height: 93%;
`;
const ProductContainer = styled.View``;
const MenuItems = styled.View`
  width: 100%;
  align-items: center;
`;

const ListsScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <Container>
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
      </Container>
      <MenuItems>
        <Menu />
      </MenuItems>
    </Wrapper>
  );
};
export default ListsScreen;
