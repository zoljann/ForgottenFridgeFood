import React, { useState } from "react";
import styled from "styled-components";
import ShoppingProduct from "../components/ShoppingProduct";
import { Keyboard } from "react-native";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const TextInputStyled = styled.TextInput`
  margin: 10% 0 10% 0;
  font-size: 25px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.text.black};
  font-family: "GothicRegular";
`;
const Line = styled.View`
  bottom: 25px;
  width: 60%;
  border-width: 0.3px;
  border-color: ${(props) => props.theme.colors.primary};
`;
const AddButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 45px;
  margin-bottom: 5%;
`;
const Texts = styled.Text`
  margin: 1% 10% 1% 10%;
  color: ${(props) => props.theme.text.white};
  font-size: 20px;
  font-family: "GothicRegular";
`;
const ShoppingEmpty = styled.Text`
  color: ${(props) => props.theme.text.gray};
  font-size: 17px;
  font-family: "GothicRegular";
  text-align: center;
`;
const ShoppingContainer = styled.View`
  width: 100%;
`;

const ShoppingScreen = () => {
  const [text, setText] = useState();
  const [textItems, setTextItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddFood = () => {
    Keyboard.dismiss();
    setTextItems([...textItems, text]);
    setText(null);
    setLoading(false);
  };

  return (
    <Wrapper>
      <TextInputStyled
        placeholder="Add food"
        onChangeText={(texty) => setText(texty)}
        value={text}
      />
      <Line />
      <AddButton onPress={() => handleAddFood()}>
        <Texts>+ Add</Texts>
      </AddButton>
      {loading ? (
        <ShoppingEmpty>
          You will see your shopping list here..but the list is empty. Start
          typing above to add food.
        </ShoppingEmpty>
      ) : (
        <ShoppingContainer>
          {textItems.map((item, index) => {
            return <ShoppingProduct key={index} foodName={item} />;
          })}
        </ShoppingContainer>
      )}
    </Wrapper>
  );
};

export default ShoppingScreen;
