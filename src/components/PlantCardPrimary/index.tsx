import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgFromUri } from "react-native-svg";

import { Container, Title } from "./styles";

interface PlantProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}

export default function PlantCardPrimary({ data, ...rest }: PlantProps) {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data?.photo} width={70} height={70} />
      <Title>{data?.name}</Title>
    </Container>
  );
}
