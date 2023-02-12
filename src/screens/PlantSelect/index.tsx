import React from "react";

import { SafeView, Container, Content, Title, SubTitle } from "./styles";
import Header from "@src/components/Header";
import EnviromentButton from "@src/components/EnviromentButton";

export default function PlantSelect() {
  return (
    <SafeView>
      <Container>
        <Header />
        <Title>Em qual hambiente </Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
        <EnviromentButton title="text" onPress={() => console.log("oi")} />
      </Container>
    </SafeView>
  );
}
