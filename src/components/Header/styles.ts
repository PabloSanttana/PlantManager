import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
`;

export const ContainerTitles = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${(props) => props.theme.FONTS.text};
  color: ${(props) => props.theme.COLORS.heading};
`;
export const Subtitle = styled.Text`
  font-size: 32px;
  font-family: ${(props) => props.theme.FONTS.heading};
  color: ${(props) => props.theme.COLORS.heading};
  line-height: 40px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
