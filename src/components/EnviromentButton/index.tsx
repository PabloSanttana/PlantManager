import React from "react";

import { TouchableOpacityProps } from "react-native";

import { Button, ButtonTitles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

function EnvironmentButton({ title, active = false, ...rest }: ButtonProps) {
  return (
    <Button active={active} {...rest}>
      <ButtonTitles active={active}>{title}</ButtonTitles>
    </Button>
  );
}

function arePropsEqual(prevProps: ButtonProps, nextProps: ButtonProps) {
  if (prevProps.active === nextProps.active) {
    return true;
  }
  return false;
}

export default React.memo(EnvironmentButton, arePropsEqual);
