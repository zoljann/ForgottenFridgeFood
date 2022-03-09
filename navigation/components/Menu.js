import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

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
const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 5%;
`;
const StyledIcons = styled(Icon)`
  font-size: 18px;
  color: ${(props) => props.theme.text.white};
`;

const Menu = () => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };
  return (
    <Wrapper>
      <StyledView>
        <StyledIcons name={"pencil"} />
        <Texts onPress={onPress}>Write</Texts>
      </StyledView>
      <StyledView>
        <StyledIcons name={"camera"} />
        <Texts onPress={onPress}>Scan</Texts>
      </StyledView>
      <StyledView>
        <StyledIcons name={"sort"} />
        <Texts onPress={onPress}>Sort</Texts>
      </StyledView>
    </Wrapper>
  );
};
export default Menu;
