import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  height: 80px;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  margin-bottom: 10px;
  padding: 0% 4% 0% 4%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const FoodName = styled.Text`
  text-align: center;
  width: 48%;
  color: ${(props) => props.theme.text.black};
  font-size: 26px;
  font-family: "GothicRegular";
  margin-right: 10%;
`;
const ExpireDateText = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-family: "GothicRegular";
  font-size: 15px;
`;
const ExpireDate = styled.Text`
  color: ${(props) => props.theme.text.gray};
  font-family: "GothicRegular";
`;
const FoodCounter = styled.View`
  position: absolute;
  align-items: center;
  margin-left: 80%;
`;
const PlusMinus = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 21px;
`;
const Counter = styled.Text`
  font-size: 20px;
  font-family: "GothicRegular";
`;
const DeleteProduct = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
`;

const Product = (props) => {
  const [foodCounter, setFoodCounter] = useState(0);
  const handlePlus = () => {
    setFoodCounter(foodCounter + 1); //vraca mi ID koji sad samo trebam preko ovog ID obrisati
  };
  const handleMinus = () => {
    if (foodCounter > 0) setFoodCounter(foodCounter - 1);
    console.log("minush");
  };

  //handle deleting product
  const handleDeleteProduct = () => {
    fetch("http://10.0.2.2:3000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted product: ", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Wrapper>
      <ExpireDateText>
        Expire date {"\n"}
        <ExpireDate>{props.date}</ExpireDate>
      </ExpireDateText>

      <FoodCounter>
        <PlusMinus name="plus" onPress={handlePlus} />
        <Counter>{props.foodCounter}</Counter>
        <PlusMinus name="minus" onPress={handleMinus} />
      </FoodCounter>

      <FoodName>{props.foodName}</FoodName>

      <DeleteProduct name="trash" onPress={() => handleDeleteProduct()} />
    </Wrapper>
  );
};
export default Product;
