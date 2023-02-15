import styled from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding: 50px 32px;
  background-color: ${(props) => props.theme.COLORS.shape};
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Goback = styled.TouchableOpacity`
  position: absolute;
  left: 32px;
  top: ${(getStatusBarHeight() || 20) + 40 + "px"};
`;
export const PlantName = styled.Text`
  margin-top: 32px;
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.FONTS.heading};
  color: ${(props) => props.theme.COLORS.heading};
  font-size: 24px;
`;
export const PlantAbout = styled.Text`
  font-family: ${(props) => props.theme.FONTS.text};
  color: ${(props) => props.theme.COLORS.heading};
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`;

export const Controller = styled.View`
  background-color: ${(props) => props.theme.COLORS.white};
  padding: 0px 32px;
  padding-top: 20px;
  padding-bottom: ${(getBottomSpace() || 20) + "px"};
`;
export const TipContainer = styled.View`
  background-color: ${(props) => props.theme.COLORS.blue_light};
  flex-direction: row;
  padding: 16px;
  align-items: center;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;
export const TipImage = styled.Image`
  margin-right: 24px;
`;
export const TipText = styled.Text`
  flex: 1;
  line-height: 25px;
  font-size: 15px;
  font-family: ${(props) => props.theme.FONTS.text};
  color: ${(props) => props.theme.COLORS.blue};
  text-align: justify;
`;
export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.FONTS.text};
  color: ${(props) => props.theme.COLORS.heading};
  margin-bottom: 5px;
  font-size: 13px;
`;

export const ButtonDatepicker = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.COLORS.blue};
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  margin: 32px;
`;

export const ButtonDatepickerText = styled.Text`
  font-family: ${(props) => props.theme.FONTS.heading};
  font-size: 20px;
  color: ${(props) => props.theme.COLORS.white};
`;
