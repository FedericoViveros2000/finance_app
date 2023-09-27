import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigate } from "react-router-native";
import { ROUTES } from "../../utils/ROUTES/routes";

export const ButtonMovement = ({ to = ROUTES.MOVEMENTS_CREATE }) => {
  const navigate = useNavigate();
  return (
    <TouchableOpacity
      style={[styles.btn, styles.positionButton]}
      activeOpacity={0.8}
      onPressOut={() => navigate(to)}
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
