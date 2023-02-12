import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;
export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 54px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;
export const Label = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.theme.COLORS.heading};
  font-family: ${(props) => props.theme.FONTS.heading};
  margin-top: 20px;
`;

interface InputProps {
  active: boolean;
}

export const Input = styled.TextInput<InputProps>`
  border-bottom-width: 1px;
  border-color: ${(props) =>
    props.active ? props.theme.COLORS.green : props.theme.COLORS.gray};
  color: ${(props) => props.theme.COLORS.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0px 20px;
`;
