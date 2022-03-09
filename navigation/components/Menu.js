import React, { useState } from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Modal } from "react-native";

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
  margin: 10% 5% 10% 5%;
  height: 85%;
  background-color: gray;
  align-items: center;
`;
const CloseButton = styled.TouchableOpacity`
  width: 100%;
`;
const CloseButtonText = styled.Text`
  text-align: right;
  margin: 0 3% 7% 0;
  font-size: 30px;
`;
const TextInputStyled = styled.TextInput`
  font-size: 25px;
  width: 100%;
  text-align: center;
`;
const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Wrapper>
      <StyledView>
        <MenuButton onPress={() => setModalVisible(true)}>
          <StyledIcons name={"pencil"} />
          <Texts>Write</Texts>
        </MenuButton>
      </StyledView>
      <StyledView>
        <MenuButton>
          <StyledIcons name={"camera"} />
          <Texts>Scan</Texts>
        </MenuButton>
      </StyledView>
      <StyledView>
        <MenuButton>
          <StyledIcons name={"sort"} />
          <Texts>Sort</Texts>
        </MenuButton>
      </StyledView>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <ModalViewStyled>
          <CloseButton onPress={() => setModalVisible(false)}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
          <TextInputStyled placeholder="Name" />
        </ModalViewStyled>
      </Modal>
    </Wrapper>
  );
};

export default Menu;
