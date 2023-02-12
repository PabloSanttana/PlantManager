import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Emoji,
  Title,
  Footer,
  SubTitle,
  Header,
} from "./styles";
import Button from "@src/components/Button";

export default function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    // @ts-ignore
    navigation.navigate("PlantSelect");
  }

  return (
    <Container>
      <Content>
        <Header>
          <Emoji>😁</Emoji>
          <>
            <Title>Prontinho</Title>
            <SubTitle>
              Agora vamos começar a cuidar das suas {"\n"} plantinhas com muito
              cuidado.
            </SubTitle>
          </>
          <Footer>
            <Button title="Começar" onPress={handleMoveOn} />
          </Footer>
        </Header>
      </Content>
    </Container>
  );
}
