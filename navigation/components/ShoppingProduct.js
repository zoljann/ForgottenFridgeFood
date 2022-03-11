import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  padding: 2% 0% 2% 4%;
`;
const FoodContainer = styled.View``;
const FoodName = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 15px;
`;
const ExpireDate = styled.Text`
  color: ${(props) => props.theme.text.gray};
`;
const FoodCounter = styled.View`
  margin-right: 6%;
`;
const PlusMinus = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 15px;
`;
const Counter = styled.Text`
  font-size: 15px;
`;

const ShoppingProduct = (props) => (
  <Wrapper>
    <FoodCounter>
      <PlusMinus name="plus" />
      <Counter>0</Counter>
      <PlusMinus name="minus" />
    </FoodCounter>
    <FoodContainer>
      <FoodName>{props.foodName}</FoodName>
      <ExpireDate>{props.foodExpireDate}</ExpireDate>
    </FoodContainer>
  </Wrapper>
);
export default ShoppingProduct;
