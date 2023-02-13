import asyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

const app = "@plantmanager:";

export interface PlantProps {
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
  dateTimeNotification: Date;
}

interface StoragePlantProps {
  [id: string]: { data: PlantProps };
}

export async function setItem(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await asyncStorage.setItem(app + key, jsonValue);
  } catch (error) {
    console.log(error);
  }
}

export async function getItem(key: string) {
  try {
    const jsonValue = await asyncStorage.getItem(app + key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const data = await asyncStorage.getItem(app + "plants");
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPants = {
      [plant.id]: {
        data: plant,
      },
    };

    const jsonValue = JSON.stringify({
      ...newPants,
      ...oldPlants,
    });

    await asyncStorage.setItem(app + "plants", jsonValue);
  } catch (error) {
    //@ts-ignore
    throw new Error(error);
  }
}

export async function loadPlant(): Promise<PlantProps[]> {
  try {
    const data = await asyncStorage.getItem(app + "plants");
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const plantsSorted = Object.keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(
            new Date(plants[plant].data.dateTimeNotification),
            "HH:mm"
          ),
        };
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      );

    return plantsSorted;
  } catch (error) {
    //@ts-ignore
    throw new Error(error);
  }
}
