import React from "react";

import { Container, LottieViewContainer } from "./styles";
import loadAnimation from "@src/assets/load.json";

export default function Load() {
  return (
    <Container>
      <LottieViewContainer source={loadAnimation} autoPlay loop />
    </Container>
  );
}
