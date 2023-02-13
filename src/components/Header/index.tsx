import React, { useState, useEffect } from "react";

import { Container, Image, ContainerTitles, Subtitle, Title } from "./styles";

import User from "@src/assets/pablo.png";
import { getItem } from "@src/services/storage";

interface headerProps {
  screen?: string;
}

function Header({ screen = "PlantSelect" }: headerProps) {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (screen === "PlantSelect") {
      asyncStorageGetUserName();
    }
  }, [userName]);

  async function asyncStorageGetUserName() {
    const response = await getItem("user");
    setUserName(response);
  }

  return (
    <Container>
      <ContainerTitles>
        <Title>{screen === "PlantSelect" ? "Olá," : "Minhas"}</Title>
        <Subtitle>
          {screen === "PlantSelect" ? userName : "Plantinhas"}
        </Subtitle>
      </ContainerTitles>
      <Image source={User} />
    </Container>
  );
}

export default React.memo(Header);
