import asyncStorage from "@react-native-async-storage/async-storage";

const app = "@plantmanager:";

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
  }
}
