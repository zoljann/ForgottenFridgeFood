import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  height: 80px;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  padding: 2% 0% 2% 6%;
  margin-bottom: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const FoodName = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 30px;
  font-family: "GothicRegular";
  padding-right: 12%;
`;
const ExpireDateText = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-family: "GothicRegular";
  font-size: 16px;
`;
const ExpireDate = styled.Text`
  color: ${(props) => props.theme.text.gray};
  font-family: "GothicRegular";
`;
const FoodCounter = styled.View`
  align-items: center;
  margin-right: 6%;
`;
const PlusMinus = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 22px;
`;
const Counter = styled.Text`
  font-size: 20px;
  font-family: "GothicRegular";
`;
const Product = (props) => {
  return (
    <Wrapper>
      <ExpireDateText>
        Expire date {"\n"}
        <ExpireDate>{props.foodExpireDate}</ExpireDate>
      </ExpireDateText>
      <FoodName>{props.foodName}</FoodName>
      <FoodCounter>
        <PlusMinus name="plus" />
        <Counter>0</Counter>
        <PlusMinus name="minus" />
      </FoodCounter>
    </Wrapper>
  );
};
export default Product;
