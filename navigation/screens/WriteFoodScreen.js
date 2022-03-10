import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  margin: 10% 5% 10% 5%;
  height: 90%;
  background-color: gray;
`;
const Texts = styled.Text``;
const AddButton = styled.TouchableOpacity`
  margin: 0 auto 0 auto;
  width: 60%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
`;
const AddButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text.white};
`;
const TextInputStyled = styled.TextInput`
  margin: 10% 0 10% 0;
  font-size: 25px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.text.white};
`;
const CloseButton = styled.TouchableOpacity`
  width: 100%;
`;
const CloseButtonText = styled.Text`
  text-align: right;
  margin: 0 3% 7% 0;
  font-size: 30px;
`;

const WriteFoodScreen = () => {
  const navigation = useNavigation();
  const handleAddProduct = () => {
    console.log("dodan");
  };
  return (
    <Wrapper>
      <CloseButton
        onPress={() => {
          navigation.navigate("Lists");
        }}
      >
        <CloseButtonText>X</CloseButtonText>
      </CloseButton>
      <TextInputStyled placeholder="Name" />
      <AddButton onPress={handleAddProduct}>
        <AddButtonText>Add food</AddButtonText>
      </AddButton>
    </Wrapper>
  );
};
export default WriteFoodScreen;
