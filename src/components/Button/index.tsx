import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, ButtonTitle } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export default function Index({ title, ...rest }: ButtonProps) {
  return (
    <Button activeOpacity={0.7} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
}
