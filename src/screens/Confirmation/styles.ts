import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
`;

export const Emoji = styled.Text`
  font-size: 96px;
  margin-bottom: 30px;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.COLORS.heading};
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  font-family: ${(props) => props.theme.FONTS.heading};
  line-height: 38px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.COLORS.heading};
  font-size: 17px;
  text-align: center;
  padding: 0px 20px;
  font-family: ${(props) => props.theme.FONTS.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0px 75px;
  margin-top: 20px;
`;
