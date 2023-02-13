import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Title, SubTitle, Container, Image, Button, Content } from "./styles";
import wateringImg from "@src/assets/watering.png";
import { getItem } from "@src/services/storage";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    verifyUserName();
  }, []);

  async function verifyUserName() {
    const response = await getItem("user");
    if (response !== null) {
      // @ts-ignore
      navigation.navigate("PlantSelect");
    }
  }

  function handleStart() {
    // @ts-ignore
    navigation.navigate("UserIndentification");
  }

  return (
    <Container>
      <Content>
        <Title>
          Gerencie {"\n"} suas plantas de{"\n"} forma fácil
        </Title>
        <Image source={wateringImg} resizeMode="contain" />
        <SubTitle>
          Não esqueça mais de regar suas {"\n"}plantas. Nós cuidamos de lembrar
          você sempre que {"\n"} precisar.
        </SubTitle>
        <Button activeOpacity={0.7} onPress={() => handleStart()}>
          <Feather name="chevron-right" size={32} color="white" />
        </Button>
      </Content>
    </Container>
  );
}
