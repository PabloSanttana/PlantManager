import React from "react";

import { TouchableOpacityProps } from "react-native";

import { Button, ButtonTitles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

export default function EnvironmentButton({ title, ...rest }: ButtonProps) {
  return (
    <Button {...rest}>
      <ButtonTitles>{title}</ButtonTitles>
    </Button>
  );
}
