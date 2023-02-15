import styled from "styled-components/native";

export const ContainerMadal = styled.View`
  background-color: ${(props) => props.theme.COLORS.white};
  width: 100%;
  border-radius: 20px;
  align-items: center;
  padding: 20px;
`;

export const ContainerImage = styled.View`
  padding: 20px;
  background-color: ${(props) => props.theme.COLORS.shape};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${(props) => props.theme.FONTS.text};
  color: ${(props) => props.theme.COLORS.heading};
  margin-top: 16px;
`;
export const Name = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${(props) => props.theme.FONTS.heading};
  color: ${(props) => props.theme.COLORS.heading};
`;

export const ContainerButtons = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin-top: 16px;
  flex-direction: row;
`;

export const ButtonAction = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${(props) => props.theme.COLORS.shape};
  margin: 0px 5px;
`;

type propsText = {
  active: boolean;
};

export const ButtonActionText = styled.Text<propsText>`
  font-size: 17px;
  font-family: ${(props) => props.theme.FONTS.text};
  color: ${(props) =>
    props.active ? props.theme.COLORS.red : props.theme.COLORS.heading};
`;
