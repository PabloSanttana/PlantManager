import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: center;
  width: 120px;
  margin: 5px 0px;
  position: relative;
  margin-left: -40px;
  border-radius: 20px;
  padding: 0px 30px;
  background-color: ${(props) => props.theme.COLORS.red};
`;
