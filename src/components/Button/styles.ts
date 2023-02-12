import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.COLORS.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  padding: 0px 20px;
`;
export const ButtonTitle = styled.Text`
  color: ${(props) => props.theme.COLORS.white};
  font-size: 20px;
  font-size: ${(props) => props.theme.FONTS.heading};
`;
