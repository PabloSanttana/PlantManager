import React from "react";
import { StyleSheet } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Title, Detail, TimeLabel, Time } from "./styles";
import { useTheme } from "styled-components";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour?: string;
  };
}

export default function PlantCardSecundary({ data, ...rest }: PlantProps) {
  const theme = useTheme();
  return (
    <RectButton
      style={[styles.container, { backgroundColor: theme.COLORS.shape }]}
      activeOpacity={0.7}
      {...rest}
    >
      <SvgFromUri uri={data?.photo} width={70} height={70} />
      <Title>{data?.name}</Title>

      <Detail>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{data?.hour}</Time>
      </Detail>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
