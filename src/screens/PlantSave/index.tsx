import React, { useState } from "react";
import { Platform, Alert } from "react-native";
import { SvgFromUri } from "react-native-svg";
import DataTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format, isBefore } from "date-fns";

import {
  AlertLabel,
  Container,
  Controller,
  PlantAbout,
  PlantName,
  TipContainer,
  TipImage,
  TipText,
  ContainerInfo,
  ButtonDatepicker,
  ButtonDatepickerText,
} from "./styles";
import waterdropImage from "@src/assets/waterdrop.png";
import Button from "../../components/Button";
import { PlantProps, savePlant } from "@src/services/storage";

interface Params {
  plant: PlantProps;
}

export default function PlantSave() {
  const navigation = useNavigation();
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == "ios");
  const route = useRoute();
  // @ts-ignore
  const { plant } = route.params as Params;

  function handleChangeTime(
    event: DateTimePickerEvent,
    dataTime: Date | undefined
  ) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldValue) => !oldValue);
    }

    if (dataTime && isBefore(dataTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma data no futuro.");
    }
    if (dataTime) {
      setSelectedDateTime(dataTime);
    }
  }
  function handleOpenDateTimePickerAndroid() {
    setShowDatePicker((oldValue) => !oldValue);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });
      //@ts-ignore
      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle: `Fique tranquilo que sempre vamos \n lembrar você de cuidar da sua plantinha \n com bastante amor.`,
        buttonTitle: "Muito obrigado :D",
        nextScreen: "MyPlants",
        icon: "hug",
      });
    } catch (error) {
      Alert.alert("Não foi possível salvar sua planta.");
    }
  }

  return (
    <Container>
      <ContainerInfo>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <PlantName>{plant.name}</PlantName>
        <PlantAbout>{plant.about}</PlantAbout>
      </ContainerInfo>

      <Controller>
        <TipContainer>
          <TipImage source={waterdropImage} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>
        <AlertLabel>Ecolha o melhor horário para ser lembrado:</AlertLabel>

        {showDatePicker && (
          <DataTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === "android" && (
          <ButtonDatepicker onPress={handleOpenDateTimePickerAndroid}>
            <ButtonDatepickerText>{`Mudar ${format(
              selectedDateTime,
              "HH:mm"
            )}`}</ButtonDatepickerText>
          </ButtonDatepicker>
        )}

        <Button title="Cadastrar Planta" onPress={handleSave} />
      </Controller>
    </Container>
  );
}
