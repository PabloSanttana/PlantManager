import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  max-width: 45%;
  background-color: ${(props) => props.theme.COLORS.shape};
  border-radius: 20px;
  padding: 20px 0px;
  align-items: center;
  margin: 10px;
`;

export const ImageSvg = styled.Image``;

export const Title = styled.Text`
  color: ${(props) => props.theme.COLORS.green_dark};
  font-family: ${(props) => props.theme.FONTS.heading};
  margin: 16px 0px;
`;
