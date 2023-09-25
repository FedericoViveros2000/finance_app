import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE } from "../ROUTES/CONSTANS/STORAGE";
export const getStorageData = async ({ name = STORAGE.BUDGET }) => {
  let storage = [{}];
  try {
    storage = await AsyncStorage.getItem(name);
  } catch (error) {
    console.log(error);
    storage = [{}];
  }

  return JSON.parse(storage);
};
