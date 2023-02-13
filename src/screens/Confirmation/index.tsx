import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

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

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  nextScreen: string;
  icon: "smile" | "hug";
}

const emojis = {
  hug: "🤗",
  smile: "😁",
};

export default function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();
  const data = routes.params as Params;

  function handleMoveOn() {
    // @ts-ignore
    navigation.navigate(data.nextScreen);
  }

  return (
    <Container>
      <Content>
        <Header>
          <Emoji>{emojis[data.icon]}</Emoji>
          <>
            <Title>{data.title}</Title>
            <SubTitle>{data.subtitle}</SubTitle>
          </>
          <Footer>
            <Button title={data.buttonTitle} onPress={handleMoveOn} />
          </Footer>
        </Header>
      </Content>
    </Container>
  );
}
