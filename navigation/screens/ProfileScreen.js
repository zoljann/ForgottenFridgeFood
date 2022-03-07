import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Texts = styled.Text``;

const ProfileScreen = ({ navigation }) => (
  <Wrapper>
    <Texts>ovdje kao postavke profila</Texts>
  </Wrapper>
);

export default ProfileScreen;
