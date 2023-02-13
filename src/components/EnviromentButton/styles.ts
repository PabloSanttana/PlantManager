import styled from "styled-components/native";

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${(props) =>
    props.active ? props.theme.COLORS.green_light : props.theme.COLORS.shape};
  margin: 0px 5px;
`;

export const ButtonTitles = styled.Text<ButtonProps>`
  font-family: ${(props) =>
    props.active ? props.theme.FONTS.heading : props.theme.FONTS.text};
  color: ${(props) =>
    props.active ? props.theme.COLORS.green_dark : props.theme.COLORS.heading};
`;
