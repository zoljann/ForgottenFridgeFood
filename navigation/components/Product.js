import React from "react";
import styled from "styled-components";
import { Image } from "react-native";

const Wrapper = styled.View`
  height: 80px;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  padding: 2% 0% 2% 6%;
  margin-bottom: 10px;
  justify-content: center;
`;
const FoodName = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 22px;
  font-family: "GothicRegular";
`;
const ExpireDate = styled.Text`
  color: ${(props) => props.theme.text.gray};
  font-family: "GothicRegular";
`;
const StyledImage = styled(Image)`
  position: absolute;
  width: 60px;
  height: 80px;
  margin-left: 80%;
`;

//dodati checkmark da se moze izbrisati proizvod
const Product = (props) => (
  <Wrapper>
    <FoodName>{props.foodName}</FoodName>
    <ExpireDate>{props.foodExpireDate}</ExpireDate>
    <StyledImage source={require("../images/milk.png")} />
  </Wrapper>
);
export default Product;
