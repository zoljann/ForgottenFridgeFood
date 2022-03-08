import React, { useState } from "react";
import styled from "styled-components";

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
  font-size: 17px;
`;

const Menu = () => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };
  return (
    <Wrapper>
      <Texts onPress={onPress}>Add</Texts>
      <Texts>Scan</Texts>
      <Texts>Sort</Texts>
    </Wrapper>
  );
};
export default Menu;
