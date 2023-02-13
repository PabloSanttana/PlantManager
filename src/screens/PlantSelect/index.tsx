import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";

import {
  SafeView,
  Container,
  Title,
  SubTitle,
  ContainerPlants,
} from "./styles";
import Header from "@src/components/Header";
import EnviromentButton from "@src/components/EnviromentButton";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import Load from "@src/components/Load";

import api from "../../services/api";

interface PlantsEnvironmentsProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export default function PlantSelect() {
  const [plants_environments, setPlants_Environments] = useState<
    PlantsEnvironmentsProps[]
  >([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
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
      <SafeView>
        <Container>
          <Header />
          <Title>Em qual hambiente </Title>
          <SubTitle>você quer colocar sua planta?</SubTitle>
        </Container>
        <View>
          <FlatList
            data={plants_environments}
            renderItem={({ item }) => (
              <EnviromentButton
                key={item.key}
                title={item.title}
                active={environmentsSelected === item.key}
                onPress={() => handleEnvironmentsSelected(item.key)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </SafeView>
      <ContainerPlants>
        <FlatList
          data={data}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
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
