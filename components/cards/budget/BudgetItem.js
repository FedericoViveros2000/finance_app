import React from "react";
import { View, Text, StyleSheet } from "react-native";
export const BudgetItem = ({ data }) => {
  return (
    <View styles={styles.container}>
      <View styles={styles.containerFlex}>
        <Text>{data.amount} (PYG)</Text>
        <Text> &gt; </Text>
      </View>
      <View style={styles.containerFlex}>
        <Text>Alerta en: {data.alert}</Text>
        <Text>{data.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  containerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
