import React from "react";
import styled from "styled-components";
import ShoppingProduct from "../components/ShoppingProduct";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const TextInputStyled = styled.TextInput`
  margin: 10% 0 10% 0;
  font-size: 25px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.text.black};
  font-family: "GothicRegular";
`;
const Line = styled.View`
  bottom: 25px;
  width: 50%;
  border-width: 0.3px;
  border-color: gray;
`;
const ShoppingProductContainer = styled.View``;
const ShoppingScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TextInputStyled placeholder="Add food" />
      <Line />
      <ShoppingProduct foodName="Eggs" />
      <ShoppingProduct foodName="Milk" />
      <ShoppingProduct foodName="Cheese" />
    </Wrapper>
  );
};

export default ShoppingScreen;
