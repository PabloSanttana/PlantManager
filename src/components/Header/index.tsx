import React from "react";

import { Container, Image, ContainerTitles, Subtitle, Title } from "./styles";

import User from "@src/assets/pablo.png";

interface HeaderProps {
  name: string;
}

function Header({ name }: HeaderProps) {
  return (
    <Container>
      <ContainerTitles>
        <Title>Olá,</Title>
        <Subtitle>{name}</Subtitle>
      </ContainerTitles>
      <Image source={User} />
    </Container>
  );
}

export default React.memo(Header);
