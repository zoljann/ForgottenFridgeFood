import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

const Wrapper = styled.View`
  margin: 10% 5% 10% 5%;
  height: 90%;
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
const CloseButton = styled(Icon)`
  text-align: right;
  font-size: 40px;
  margin: 2% 2% 0 0;
`;

const WriteFoodScreen = () => {
  const navigation = useNavigation();
  const handleAddProduct = () => {
    console.log("dodan");
  };
  const [foodName, setFoodName] = useState("");
  const [foodExpireDate, setFoodExpireDate] = useState("");
  const [foodImage, setFoodImage] = useState("");
  return (
    <Wrapper>
      <CloseButton
        name="remove"
        onPress={() => {
          navigation.navigate("Lists");
        }}
      />
      <TextInputStyled
        placeholder="Name"
        value={foodName}
        onChangeText={(text) => setFoodName(text)}
      />
      <AddButton onPress={handleAddProduct}>
        <AddButtonText>Add food</AddButtonText>
      </AddButton>
    </Wrapper>
  );
};
export default WriteFoodScreen;
