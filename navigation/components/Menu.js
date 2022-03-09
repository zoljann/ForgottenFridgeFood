import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Wrapper = styled.View`
  height: 35px;
  width: 80%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const Texts = styled.Text`
  margin: 0 5% 0 5%;
  color: ${(props) => props.theme.text.white};
  font-size: 18px;
`;
const StyledIcons = styled(Icon)`
  font-size: 18px;
  color: ${(props) => props.theme.text.white};
`;
const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: 5%;
`;

const Menu = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <MenuButton onPress={() => navigation.navigate("WriteFood")}>
        <StyledIcons name={"pencil"} />
        <Texts>Write</Texts>
      </MenuButton>
      <MenuButton>
        <StyledIcons name={"camera"} />
        <Texts>Scan</Texts>
      </MenuButton>
      <MenuButton>
        <StyledIcons name={"sort"} />
        <Texts>Sort</Texts>
      </MenuButton>
    </Wrapper>
  );
};

export default Menu;
