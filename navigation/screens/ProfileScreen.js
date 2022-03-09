import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Texts = styled.Text``;

const ProfileScreen = ({ navigation }) => (
  <Wrapper>
    <Texts>ovdje kao postavke profila</Texts>
    <Texts>xd</Texts>
  </Wrapper>
);

export default ProfileScreen;
