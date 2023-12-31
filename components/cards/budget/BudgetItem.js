import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/ROUTES/routes";
import { setStorage } from "../../../utils/STORAGE/setStorage";
import { STORAGE } from "../../../utils/ROUTES/CONSTANS/STORAGE";
import { formatMoney } from "../../../utils/formatMoney";

const SeparatorSection = () => <View style={{ marginTop: 10 }} />;

export const BudgetItem = ({ data }) => {
  const navigate = useNavigate();
  const dateView = `${new Date(data?.date)?.getMonth()}/${new Date(
    data?.date
  )?.getFullYear()}`;

  const budgetDetail = async () => {
    try {
      await setStorage({
        name: STORAGE.BUDGET_DETAILS,
        values: data,
      });
      navigate(ROUTES.BUDGET_DETAILS);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <SeparatorSection />
      <TouchableOpacity
        activeOpacity={0.8}
        onPressOut={budgetDetail}
        onLongPress={() => setDeleteBudget(true)}
      >
        <View style={styles.container}>
          <View style={styles.containerFlex}>
            <Text style={styles.textColor}>{formatMoney(data.amount)}</Text>
          </View>
          <View style={styles.containerFlex}>
            <Text style={styles.textColor}>Alerta en: {data.alert} %</Text>
            <Text style={styles.textColor}>{dateView}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#183D3D",
    padding: 10,
    gap: 10,
    borderRadius: 10,
  },
  containerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textColor: {
    color: "white",
  },
});
