import React from "react";
import { View, Text, StyleSheet } from "react-native";
export const IncomeCard = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textWhite, styles.fontMd]}>Ingresos / Egresos</Text>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Ingresos</Text>
        <Text style={styles.textWhite}>3.000.000</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Egresos</Text>
        <Text style={styles.textWhite}>3.000.000</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Saldo</Text>
        <Text style={styles.textWhite}>3.000.000</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textWhite}>Meta: </Text>
        <Text style={styles.textWhite}>3.000.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2980b9",
    borderRadius: 10,
    padding: 10,
    gap: 10,
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
