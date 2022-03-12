import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Alert } from "react-native";

const Wrapper = styled.View`
  margin: 10% 5% 10% 5%;
  height: 90%;
  align-items: center;
`;
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
  font-family: "GothicRegular";
`;
const TextInputStyled = styled.TextInput`
  margin: 10% 0 10% 0;
  font-size: 30px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.text.black};
  font-family: "GothicRegular";
`;
const CloseButton = styled(Icon)`
  margin-left: 85%;
  font-size: 40px;
  color: ${(props) => props.theme.colors.primary};
`;
const Line = styled.View`
  bottom: 25px;
  width: 50%;
  border-width: 0.3px;
  border-color: gray;
`;

const WriteFoodScreen = ({ navigation }) => {
  const [foodName, setFoodName] = useState("");
  const [foodExpireDate, setFoodExpireDate] = useState("");
  const [foodImage, setFoodImage] = useState("");

  const handleAddProduct = () => {
    fetch("http://10.0.2.2:3000/send-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName,
        foodExpireDate,
        foodImage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert(`Added ${data.foodName} in your fridge`);
        navigation.navigate("Lists");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
      <Line />
      <AddButton onPress={handleAddProduct}>
        <AddButtonText>Add food</AddButtonText>
      </AddButton>
    </Wrapper>
  );
};
export default WriteFoodScreen;
