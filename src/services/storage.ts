import asyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import * as Notifications from "expo-notifications";

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
  [id: string]: { data: PlantProps; notificationId: string };
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
    const nexTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { repeat_every, times } = plant.frequency;

    if (repeat_every === "week") {
      const interval = Math.trunc(7 / times);
      nexTime.setDate(now.getDate() + interval);
    } else {
      nexTime.setDate(nexTime.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nexTime.getTime()) / 1000)
    );

    console.log(seconds);

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Heey, 🌱",
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant,
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      },
    });

    const data = await asyncStorage.getItem(app + "plants");
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPants = {
      [plant.id]: {
        data: plant,
        notificationId,
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

export async function deletePlant(id: string): Promise<void> {
  try {
    const data = await asyncStorage.getItem(app + "plants");
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    await Notifications.cancelScheduledNotificationAsync(
      oldPlants[id].notificationId
    );

    delete oldPlants[id];

    const jsonValue = JSON.stringify({
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
