import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatMoney } from "../../../utils/formatMoney";
export const IncomeCard = ({ income, egress, budget, alert }) => {
  const calcBudgetAlert = (budget * alert) / 100;
  return (
    <View
      style={[
        styles.container,
        egress > calcBudgetAlert ? styles.backgroundAlert : styles.background,
      ]}
    >
      <Text style={[styles.textWhite, styles.fontMd]}>Ingresos / Egresos</Text>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Ingresos</Text>
        <Text style={styles.textWhite}>{formatMoney(income)}</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Egresos</Text>
        <Text style={styles.textWhite}>{formatMoney(egress)}</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Presupuesto: </Text>
        <Text style={styles.textWhite}>{formatMoney(budget)}</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Saldo Restante: </Text>
        <Text style={styles.textWhite}>{formatMoney(budget - egress)}</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Alerta: </Text>
        <Text style={styles.textWhite}>{alert} %</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  backgroundAlert: {
    backgroundColor: "red",
  },
  background: {
    backgroundColor: "#2980b9",
  },
  containerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontMd: {
    fontSize: 18,
  },
  textWhite: {
    color: "white",
  },
});
