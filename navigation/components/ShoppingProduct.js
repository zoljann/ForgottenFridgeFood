import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  height: 70px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  margin-bottom: 10px;
  padding: 0% 4% 0% 4%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const FoodName = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.text.black};
  font-size: 26px;
  font-family: "GothicRegular";
  width: 60%;
  text-align: left;
`;
const FoodCounter = styled.View`
  align-items: center;
`;
const PlusMinus = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
`;
const Counter = styled.Text`
  font-size: 20px;
  font-family: "GothicRegular";
`;
const DeleteProduct = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
`;

const ShoppingProduct = (props) => {
  const [foodCounter, setFoodCounter] = useState(0);

  return (
    <Wrapper>
      <FoodName>{props.foodName}</FoodName>

      <FoodCounter>
        <PlusMinus
          name="plus"
          onPress={() => {
            setFoodCounter(foodCounter + 1);
          }}
        />
        <Counter>{foodCounter}</Counter>
        <PlusMinus
          name="minus"
          onPress={() => {
            if (foodCounter > 0) setFoodCounter(foodCounter - 1);
          }}
        />
      </FoodCounter>

      <DeleteProduct
        name="trash"
        onPress={() => console.log("delete product")}
      />
    </Wrapper>
  );
};
export default ShoppingProduct;
