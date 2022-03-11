import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  padding: 1% 6% 1% 6%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const FoodContainer = styled.View``;
const FoodName = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 20px;
`;
const ExpireDate = styled.Text`
  color: ${(props) => props.theme.text.gray};
`;
const FoodCounter = styled.View`
  align-items: center;
  margin-right: 6%;
`;
const PlusMinus = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 17px;
`;
const Counter = styled.Text`
  font-size: 15px;
`;
const DeleteProduct = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 30px;
`;

const ShoppingProduct = (props) => {
  const [foodCounter, setFoodCounter] = useState(0);
  const handlePlus = () => {
    setFoodCounter(foodCounter + 1);
  };
  const handleMinus = () => {
    if (foodCounter > 0) setFoodCounter(foodCounter - 1);
  };
  const handleDelete = () => {
    console.log("obrisan shopping product");
  };
  return (
    <Wrapper>
      <FoodCounter>
        <PlusMinus name="plus" onPress={handlePlus} />
        <Counter>{foodCounter}</Counter>
        <PlusMinus name="minus" onPress={handleMinus} />
      </FoodCounter>
      <FoodContainer>
        <FoodName>{props.foodName}</FoodName>
        <ExpireDate>{props.foodExpireDate}</ExpireDate>
      </FoodContainer>
      <DeleteProduct name="trash" onPress={handleDelete} />
    </Wrapper>
  );
};
export default ShoppingProduct;
