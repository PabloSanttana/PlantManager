import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.COLORS.heading};
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 38px;
  font-family: ${(props) => props.theme.FONTS.heading};
  line-height: 38px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.COLORS.heading};
  font-size: 18px;
  text-align: center;
  padding: 0px 20px;
  font-family: ${(props) => props.theme.FONTS.text};
  line-height: 30px;
`;

export const Image = styled.Image`
  width: ${Dimensions.get("window").width * 0.7 + "px"};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.COLORS.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
