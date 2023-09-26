import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BudgetCardDetails } from "../components/cards/budget/BudgetCardDetails";
import { getStorageData } from "../utils/STORAGE/getStorage";
import { STORAGE } from "../utils/ROUTES/CONSTANS/STORAGE";
import { NavBar } from "../components/navbar/NavBar";
import { ROUTES } from "../utils/ROUTES/routes";
export const BudgetScreenDetails = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getStorageData({
      name: STORAGE.BUDGET_DETAILS,
    }).then((res) => {
      setData(res);
    });
  }, []);
  return (
    <View>
      <NavBar to={ROUTES.BUDGET_SCREEN} title="Volver" />
      <BudgetCardDetails data={data} />
    </View>
  );
};
