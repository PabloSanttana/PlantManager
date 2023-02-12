import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Form,
  Label,
  Emoji,
  Input,
  Footer,
  Header,
} from "./styles";
import Button from "@src/components/Button";
import { Platform } from "react-native";

export default function UserIndentification() {
  var isFilled = false;
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState<string>("");

  function handleStart() {
    // @ts-ignore
    navigation.navigate("Confirmation");
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  if (isFocused || !!name) {
    isFilled = true;
  }

  return (
    <Container>
      <Content behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Form>
          <Header>
            <Emoji>{isFilled ? "😁" : "😀"}</Emoji>
            <Label>Como podemos {"\n"} chamar você?</Label>
            <Input
              placeholder="Digite seu nome..."
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={setName}
              active={isFilled}
            />
            <Footer>
              <Button title="Confirma" onPress={handleStart} />
            </Footer>
          </Header>
        </Form>
      </Content>
    </Container>
  );
}