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
  height: 92%;
`;
const ProductContainer = styled.View``;
const MenuItems = styled.View`
  width: 100%;
  align-items: center;
`;

const ListsScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filter, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  let url = "http://10.0.2.2:3000/";
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setData(results);
        setFilteredData(results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error on fetching", error.message);
      });
  };

  const renderItems = (item) => {
    return (
      <ProductContainer>
        <Product
          id={item._id}
          foodName={item.foodName}
          date={item.date}
          foodCounter={item.foodCounter}
        />
      </ProductContainer>
    );
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.foodName
          ? item.foodName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(data);
    }
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
          value={search}
          onChangeText={(text) => searchFilter(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#479FEC" />
        ) : (
          <FlatList
            data={filter}
            renderItem={({ item }) => {
              return renderItems(item);
            }}
            keyExtractor={(item) => item._id}
            onRefresh={() => fetchData()} //on pulldown refresh data
            refreshing={loading}
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
