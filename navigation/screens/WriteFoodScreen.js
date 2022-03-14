import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Alert } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const Wrapper = styled.View`
  margin: 10% 5% 10% 5%;
  height: 90%;
  align-items: center;
`;
const AddButton = styled.TouchableOpacity`
  margin: 30% auto 0 auto;
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
  width: 80%;
  border-width: 0.3px;
  border-color: gray;
`;
const ButtonStyled = styled.TouchableOpacity`
  width: 40%;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
`;
const ButtonStyledText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text.white};
  font-family: "GothicRegular";
`;
const TextStyled = styled.Text`
  font-family: "GothicRegular";
  margin: 3% 0% 2% 0%;
  font-size: 20px;
`;
const TextStyled2 = styled.Text`
  font-family: "GothicRegular";
  margin: 10% 0% 2% 0%;
  font-size: 20px;
`;
const TextStyled3 = styled.Text`
  font-family: "GothicRegular";
  font-size: 15px;
  text-align: center;
`;
const FoodCounter = styled.View`
  align-items: center;
`;
const PlusMinus = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 22px;
`;
const Counter = styled.Text`
  font-size: 20px;
  font-family: "GothicRegular";
`;

const WriteFoodScreen = ({ navigation }) => {
  const [foodName, setFoodName] = useState("");
  const [date, setDate] = useState(new Date());
  const [foodCounter, setFoodCounter] = useState(0);

  //handle adding product to database
  const handleAddProduct = () => {
    fetch("http://10.0.2.2:3000/send-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName,
        date,
        foodCounter,
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

  //handling dateTimePicker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate.toDateString());
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: date,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode("date");
  };

  //handling quantity
  const handlePlus = () => {
    setFoodCounter(foodCounter + 1);
  };
  const handleMinus = () => {
    if (foodCounter > 0) setFoodCounter(foodCounter - 1);
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
      <TextStyled>Set expire date</TextStyled>
      <ButtonStyled onPress={showDatepicker}>
        <ButtonStyledText>Add date</ButtonStyledText>
      </ButtonStyled>
      <TextStyled3>
        Selected date: {"\n"} {date.toLocaleString()}
      </TextStyled3>
      <TextStyled2>Set quantity</TextStyled2>
      <FoodCounter>
        <PlusMinus name="plus" onPress={handlePlus} />
        <Counter>{foodCounter}</Counter>
        <PlusMinus name="minus" onPress={handleMinus} />
      </FoodCounter>
      <AddButton onPress={handleAddProduct}>
        <AddButtonText>Finish adding food</AddButtonText>
      </AddButton>
    </Wrapper>
  );
};
export default WriteFoodScreen;
