import styled from "styled-components/native";

export const SafeView = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.background};
  padding: 0px 20px;
`;

export const Content = styled.View``;

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
