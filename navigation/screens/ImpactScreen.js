import React from "react";
import styled from "styled-components";

const Wrapper = styled.View`
  padding: 15% 5% 0 5%;
`;
const Title = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 25px;
  font-family: "GothicRegular";
  margin-bottom: 5%;
`;
const WorldMap = styled.View`
  background-color: ${(props) => props.theme.text.softgray};
  height: 300px;
  border-radius: 20px;
  padding: 2%;
`;
const Texts = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 17px;
  font-family: "GothicRegular";
`;
const Since = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 13px;
  text-align: center;
  font-family: "GothicRegular";
`;
const Images = styled.Image`
  width: 350px;
  height: 240px;
`;
const Image2 = styled.Image`
  margin: 3%;
  width: 100px;
  height: 140px;
  position: absolute;
`;
const Text2 = styled.Text`
  color: ${(props) => props.theme.text.black};
  font-size: 16px;
  font-family: "GothicRegular";
  margin-left: 35%;
`;

const Data = styled.View`
  margin-top: 5%;
  background-color: ${(props) => props.theme.text.softgray};
  height: 180px;
  border-radius: 20px;
  padding: 2%;
  justify-content: center;
`;
const ImpactScreen = () => (
  <Wrapper>
    <Title>Impact</Title>
    <WorldMap>
      <Texts>People around world have joined in.</Texts>
      <Images source={require("./../images/world_map.png")} />
      <Since>Since March 22, 2022</Since>
    </WorldMap>
    <Data>
      <Text2>Foods tracked: 3.261</Text2>
      <Text2>Foods consumed: 1.676</Text2>
      <Text2>Foods expired: 521</Text2>
      <Text2>Waste percentage: 5,66%</Text2>
      <Image2 source={require("./../images/tree.png")} />
    </Data>
  </Wrapper>
);

export default ImpactScreen;
