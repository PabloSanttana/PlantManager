import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  padding-top: 50px;
  background-color: ${(props) => props.theme.COLORS.background};
`;

export const Spotlight = styled.View`
  background-color: ${(props) => props.theme.COLORS.blue_light};
  padding: 0px 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;
export const SpotlightText = styled.Text`
  flex: 1;
  padding: 0px 20px;
  color: ${(props) => props.theme.COLORS.blue};
`;

export const PlantsContainer = styled.View`
  flex: 1;
  width: 100%;
`;
export const PlantsTitles = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.FONTS.heading};
  color: ${(props) => props.theme.COLORS.heading};
  padding: 20px 0px;
`;
