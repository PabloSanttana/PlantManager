import React from "react";

import { Container, Image, ContainerTitles, Subtitle, Title } from "./styles";

import User from "@src/assets/pablo.png";

export default function Header() {
  return (
    <Container>
      <ContainerTitles>
        <Title>Olá,</Title>
        <Subtitle>Pablo</Subtitle>
      </ContainerTitles>
      <Image source={User} />
    </Container>
  );
}
