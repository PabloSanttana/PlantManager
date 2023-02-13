import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import {
  Container,
  PlantsContainer,
  PlantsTitles,
  Spotlight,
  SpotlightImage,
  SpotlightText,
} from "./styles";
import Header from "@src/components/Header";
import waterdropImage from "@src/assets/waterdrop.png";
import { loadPlant, PlantProps } from "@src/services/storage";
import PlantCardSecundary from "@src/components/PlantCardSecundary";

export default function MyPlants() {
  const [Myplants, setMyPlants] = useState<PlantProps[]>([]);
  const [nextWater, setNextWater] = useState("");

  useEffect(() => {
    getStoragePlants();
  }, []);

  async function getStoragePlants() {
    const response = await loadPlant();

    const nextTime = formatDistance(
      new Date(response[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: pt }
    );
    setNextWater(`Não esquecer de regar a ${response[0].name} à ${nextTime}.`);
    setMyPlants(response);
  }

  return (
    <Container>
      <Header screen="MyPlants" />
      <Spotlight>
        <SpotlightImage source={waterdropImage} />
        <SpotlightText>{nextWater}</SpotlightText>
      </Spotlight>

      <PlantsContainer>
        <PlantsTitles>Próximas regadas</PlantsTitles>

        <FlatList
          data={Myplants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PlantCardSecundary data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </PlantsContainer>
    </Container>
  );
}
