import styled from "styled-components/native";

export const Title = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.COLORS.green_dark};
  font-family: ${(props) => props.theme.FONTS.heading};
  margin-left: 10px;
  font-size: 17px;
`;

export const Detail = styled.View`
  align-items: flex-end;
`;
export const TimeLabel = styled.Text`
  color: ${(props) => props.theme.COLORS.body_light};
  font-family: ${(props) => props.theme.FONTS.text};
  font-size: 16px;
`;
export const Time = styled.Text`
  color: ${(props) => props.theme.COLORS.body_dark};
  font-family: ${(props) => props.theme.FONTS.heading};
  font-size: 16px;
  margin-top: 5px;
`;
