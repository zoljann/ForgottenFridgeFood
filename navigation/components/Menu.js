import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Modal, View, TextInput, StyleSheet } from "react-native";

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
const ModalTextStyled = styled.Text`
  color: black;
`;
const ModalViewStyled = styled.View`
  height: 10%;
  width: 100%;
  background-color: white;
`;

const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Wrapper>
      <StyledView>
        <StyledIcons name={"pencil"} />
        <Texts onPress={() => setModalVisible(true)}>Write</Texts>
      </StyledView>
      <StyledView>
        <StyledIcons name={"camera"} />
        <Texts>Scan</Texts>
      </StyledView>
      <StyledView>
        <StyledIcons name={"sort"} />
        <Texts>Sort</Texts>
      </StyledView>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <ModalViewStyled>
          <ModalTextStyled>xd</ModalTextStyled>
        </ModalViewStyled>
      </Modal>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});

export default Menu;
