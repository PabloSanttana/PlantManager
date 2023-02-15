import React from "react";

import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { Container } from "./styles";

interface PropsButtonDelete extends TouchableOpacityProps {}

export default function ButtonDelete({ ...rest }: PropsButtonDelete) {
  const theme = useTheme();
  return (
    <Container activeOpacity={0.7} {...rest}>
      <MaterialIcons
        name="delete-outline"
        color={theme.COLORS.white}
        size={30}
      />
    </Container>
  );
}
