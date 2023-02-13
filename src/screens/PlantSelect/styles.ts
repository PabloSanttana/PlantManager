import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.COLORS.background};
  padding: 0px 32px;
  padding-top: ${(getStatusBarHeight() || 20) + "px"};
`;

export const ContainerFlatlistHorizontal = styled.View`
  background-color: ${(props) => props.theme.COLORS.background};
  height: 90px;
`;

export const ContainerPlants = styled.View`
  flex: 2;
  padding: 0px 32px;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.background};
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.COLORS.heading};
  font-family: ${(props) => props.theme.FONTS.heading};
  line-height: 20px;
  margin-top: 15px;
`;
export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.COLORS.heading};
  font-family: ${(props) => props.theme.FONTS.text};
  line-height: 20px;
`;
