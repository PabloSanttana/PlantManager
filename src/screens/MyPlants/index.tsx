import React, { useState, useEffect } from "react";
import { FlatList, Alert } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { useIsFocused } from "@react-navigation/native";

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
import { loadPlant, PlantProps, deletePlant } from "@src/services/storage";
import PlantCardSecundary from "@src/components/PlantCardSecundary";
import ModalPlantsDelete from "@src/components/Modal/index";

let prevOpenedRow: any = null;

export default function MyPlants() {
  const isFocused = useIsFocused();
  const [Myplants, setMyPlants] = useState<PlantProps[]>([]);
  const [nextWater, setNextWater] = useState("");
  const [selectedPlant, setSelectedPlant] = useState<PlantProps>();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    getStoragePlants();
  }, [isFocused]);

  async function getStoragePlants() {
    let title = "";
    const response = await loadPlant();

    if (response.length === 0) {
      title = "Você não tem plantas cadastradas.";
    } else {
      const nextTime = formatDistance(
        new Date(response[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );
      title = `Não esquecer de regar a ${response[0].name} à ${nextTime}.`;
      setMyPlants(response);
    }
    setNextWater(title);
  }

  async function handleModalDelete(id: string) {
    const selectedPlants = Myplants.find((plants) => plants.id === id);
    setSelectedPlant(selectedPlants);
    setIsModal(true);
  }

  async function handleActionModal(value: string, id?: string) {
    if (value === "cancel") {
      prevOpenedRow?.current.close();
      setIsModal(false);
      return;
    } else if (id) {
      try {
        const plantFilter = Myplants.filter((plants) => plants.id !== id);
        await deletePlant(id);
        prevOpenedRow = null;
        setMyPlants(plantFilter);
        setIsModal(false);
      } catch (error) {
        Alert.alert("Não foi possível deletar.");
      }
    }
  }

  // useRef
  function selectRow(item: any) {
    if (prevOpenedRow && prevOpenedRow !== item) {
      prevOpenedRow.current.close();
    }
    prevOpenedRow = item;
  }

  console.log("opa");

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
          renderItem={({ item }) => (
            <PlantCardSecundary
              prevOpenedRow={selectRow}
              funcDelete={handleModalDelete}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
        {selectedPlant && (
          <ModalPlantsDelete
            isVisible={isModal}
            data={selectedPlant}
            handleFunc={handleActionModal}
          />
        )}
      </PlantsContainer>
    </Container>
  );
}
