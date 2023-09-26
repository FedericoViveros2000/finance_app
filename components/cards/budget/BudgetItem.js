import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/ROUTES/routes";
import { setStorage } from "../../../utils/STORAGE/setStorage";
import { STORAGE } from "../../../utils/ROUTES/CONSTANS/STORAGE";

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
      <TouchableOpacity activeOpacity={0.8} onPressOut={budgetDetail}>
        <View style={styles.container}>
          <View style={styles.containerFlex}>
            <Text>{data.amount} (PYG)</Text>
            <Text>Abrir</Text>
          </View>
          <View style={styles.containerFlex}>
            <Text>Alerta en: {data.alert} %</Text>
            <Text>{dateView}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  containerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
