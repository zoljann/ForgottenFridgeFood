import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  height: 80px;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid ${(props) => props.theme.text.gray};
  padding: 2% 0% 2% 6%;
  margin-bottom: 10px;
  justify-content: center;
  text-align: center;
`;
const FoodName = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 30px;
  font-family: "GothicRegular";
  justify-content: center;
  text-align: center;
`;
const ExpireDateText = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-family: "GothicRegular";
  position: absolute;
  padding-left: 5%;
  font-size: 16px;
`;
const ExpireDate = styled.Text`
  color: ${(props) => props.theme.text.gray};
  font-family: "GothicRegular";
`;

const Product = (props) => (
  <Wrapper>
    <FoodName>{props.foodName}</FoodName>
    <ExpireDateText>
      Expire date {"\n"}
      <ExpireDate>{props.foodExpireDate}</ExpireDate>
    </ExpireDateText>
  </Wrapper>
);
export default Product;
