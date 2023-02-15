import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { SvgFromUri } from "react-native-svg";
import {
  GestureHandlerRootView,
  RectButton,
  RectButtonProps,
} from "react-native-gesture-handler";
import Swipeable, {
  SwipeableProps,
} from "react-native-gesture-handler/Swipeable";

import { Title, Detail, TimeLabel, Time } from "./styles";
import { useTheme } from "styled-components";
import ButtonDelete from "@src/components/ButtonDelete";

interface PlantProps extends SwipeableProps {
  data: {
    id: string;
    name: string;
    photo: string;
    hour?: string;
  };
  funcDelete: (value: string) => void;
  prevOpenedRow: (ref: any) => void;
}

function PlantCardSecundary({
  data,
  funcDelete,
  prevOpenedRow,
  ...rest
}: PlantProps) {
  const theme = useTheme();
  const swipeableRef = useRef(null);

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={swipeableRef}
        friction={2}
        overshootRight={false}
        renderRightActions={() => (
          <ButtonDelete onPress={() => funcDelete(data.id)} />
        )}
        onSwipeableOpen={() => prevOpenedRow(swipeableRef)}
        {...rest}
      >
        <RectButton
          style={[styles.container, { backgroundColor: theme.COLORS.shape }]}
          activeOpacity={0.7}
        >
          <SvgFromUri uri={data?.photo} width={70} height={70} />
          <Title>{data?.name}</Title>

          <Detail>
            <TimeLabel>Regar às</TimeLabel>
            <Time>{data?.hour}</Time>
          </Detail>
        </RectButton>
      </Swipeable>
    </GestureHandlerRootView>
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
    height: 80,
  },
});

function arePropsEqual(prevProps: PlantProps, nextProps: PlantProps) {
  if (prevProps.id === nextProps.id) {
    return true;
  }
  return false;
}

export default React.memo(PlantCardSecundary, arePropsEqual);
