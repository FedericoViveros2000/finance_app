import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { ButtonCreateBudget } from "../components/cards/budget/ButtonCreateBudget";
import { ROUTES } from "../utils/ROUTES/routes";
import { BudgetItem } from "../components/cards/budget/BudgetItem";
import { STORAGE } from "../utils/ROUTES/CONSTANS/STORAGE";
import { getStorageData } from "../utils/STORAGE/getStorage";

export const BudgetScreen = () => {
  const [amount, setAmount] = useState([{}]);

  useEffect(() => {
    getStorageData({
      name: STORAGE.BUDGET,
    })
      .then((res) => {
        setAmount(res);
      })
      .catch((err) => console.err(err));
  }, []);
  return (
    <View>
      <ButtonCreateBudget to={ROUTES.CREATE_BUDGET} />
      <FlatList
        data={amount}
        renderItem={({ item }) => <BudgetItem data={item} />}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};
