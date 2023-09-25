import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE } from "../ROUTES/CONSTANS/STORAGE";

export const setStorage = async ({ name = STORAGE.BUDGET, values }) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(values));
  } catch (err) {
    console.log(err);
  }
};
