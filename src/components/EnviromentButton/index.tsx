import React from "react";

import { TouchableOpacityProps } from "react-native";

import { Button, ButtonTitles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

export default function EnvironmentButton({
  title,
  active = false,
  ...rest
}: ButtonProps) {
  return (
    <Button active={active} {...rest}>
      <ButtonTitles active={active}>{title}</ButtonTitles>
    </Button>
  );
}
