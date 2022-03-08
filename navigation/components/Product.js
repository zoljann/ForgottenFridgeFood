import React from "react";
import styled from "styled-components";
import { Image } from "react-native";

const Wrapper = styled.View`
  height: 80px;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  padding: 5%;
  margin-bottom: 10px;
  //add box shadow
`;
const FoodName = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 15px;
`;
const ExpireDate = styled.Text`
  color: ${(props) => props.theme.text.gray};
`;
const StyledImage = styled(Image)`
  position: absolute;
  width: 60px;
  height: 80px;
  margin-left: 80%;
`;

//dodati checkmark da se moze izbrisati proizvod
const Product = () => (
  <Wrapper>
    <FoodName>Ime hrane</FoodName>
    <ExpireDate>Do 21.3.2022</ExpireDate>
    <StyledImage source={require("../images/milk.png")} />
  </Wrapper>
);
export default Product;
