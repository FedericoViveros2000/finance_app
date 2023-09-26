import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const ButtonMovement = () => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.positionButton]}
      activeOpacity={0.8}
    >
      <Text style={styles.textCenter}>Agregar movimiento</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#028f76",
    borderRadius: 10,
    paddingVertical: 10,
  },
  textCenter: {
    textAlign: "center",
    color: "#fff",
  },
  positionButton: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});
