import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { ROUTES } from "../../../utils/ROUTES/routes";
export const ButtonCreateBudget = ({ to = ROUTES.CREATE_BUDGET }) => {
  const navigate = useNavigate();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPressOut={() => navigate(to)}
    >
      <Text styles={styles.textStyles}>Create Budget</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#506266",
    padding: 10,
  },
  textStyles: {
    textAlign: "center",
    color: "#fff",
  },
});
