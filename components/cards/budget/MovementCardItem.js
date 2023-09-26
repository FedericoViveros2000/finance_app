import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const MovementCardItem = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.spaceBetween]}>
        <Text style={styles.textWhite}>Pago: Supermercados</Text>
        <Text style={styles.textWhite}>Abrir</Text>
      </View>
      <View style={[styles.flexRow, styles.spaceBetween]}>
        <Text style={styles.textWhite}>16.500</Text>
        <Text>28/09/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    gap: 10,
  },
  flexRow: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  textWhite: {
    color: "white",
  },
});
