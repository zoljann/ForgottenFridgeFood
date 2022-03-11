import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Menu from "../components/Menu";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-default";
import { FlatList, ActivityIndicator } from "react-native";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //fetching one time, set by []
    fetch("http://10.0.2.2:3000/")
      .then((response) => response.json())
      .then((results) => {
        setData(results);
        setLoading(false);
      });
  }, []);

  const renderItems = (item) => {
    return (
      <ProductContainer>
        <Product
          foodName={item.foodName}
          foodExpireDate={item.foodExpireDate}
        />
      </ProductContainer>
    );
  };
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
            fontFamily: "GothicRegular",
          }}
          placeholderTextColor={"#479FEC"}
          placeholder={"Do i have.."}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#479FEC" />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return renderItems(item);
            }}
            keyExtractor={(item) => item._id}
          />
        )}
      </Container>
      <MenuItems>
        <Menu />
      </MenuItems>
    </Wrapper>
  );
};
export default ListsScreen;
