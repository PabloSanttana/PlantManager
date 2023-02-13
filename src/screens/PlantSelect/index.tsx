import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Title,
  SubTitle,
  ContainerPlants,
  ContainerFlatlistHorizontal,
} from "./styles";
import Header from "@src/components/Header";
import EnviromentButton from "@src/components/EnviromentButton";
import PlantCardPrimary from "@src/components/PlantCardPrimary";
import Load from "@src/components/Load";

import api from "@src/services/api";
import { PlantProps } from "@src/services/storage";

interface PlantsEnvironmentsProps {
  key: string;
  title: string;
}

export default function PlantSelect() {
  const navigation = useNavigation();
  const [plants_environments, setPlants_Environments] = useState<
    PlantsEnvironmentsProps[]
  >([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [environmentsSelected, setEnvironmentsSelected] =
    useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  useEffect(() => {
    getEnviroment();
    getPlants();
  }, []);

  async function getEnviroment() {
    const { data } = await api.get(
      `plants_environments?_sort=title&_order=asc`
    );
    setPlants_Environments([
      {
        key: "all",
        title: "Todos",
      },
      ...data,
    ]);
  }
  async function getPlants() {
    try {
      const { data } = await api.get(
        `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
      );
      if (data.length === 0) {
        setIsLoading(false);
        setLoadingMore(false);
        setLoadedAll(true);
        return;
      }
      if (page > 1) {
        setPlants((oldvalue) => [...oldvalue, ...data]);
      } else {
        setPlants(data);
      }
      setIsLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleEnvironmentsSelected(environment: string) {
    setEnvironmentsSelected(environment);
  }

  function handleGetMore(distance: number) {
    if (loadedAll || loadingMore) {
      return;
    }
    if (distance < 1) {
      return;
    }
    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    getPlants();
  }

  function handlePlantSelected(plant: PlantProps) {
    // @ts-ignore
    navigation.navigate("PlantSave", { plant: plant });
  }

  const data =
    environmentsSelected === "all"
      ? plants
      : plants?.filter((plants) =>
          plants.environments.includes(environmentsSelected)
        );

  if (isLoading) {
    return <Load />;
  }

  return (
    <>
      <Container>
        <Header />
        <Title>Em qual hambiente </Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </Container>
      <ContainerFlatlistHorizontal>
        <FlatList
          data={plants_environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={environmentsSelected === item.key}
              onPress={() => handleEnvironmentsSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </ContainerFlatlistHorizontal>

      <ContainerPlants>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelected(item)}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleGetMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color="green" /> : <></>
          }
        />
      </ContainerPlants>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
    paddingRight: 50,
  },
});
