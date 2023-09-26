import React from "react";
import { useNavigate } from "react-router-native";
import { TouchableOpacity, Text } from "react-native";

export const NavBar = ({ to, title = "Volver" }) => {
  const navigate = useNavigate();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginVertical: 10,
      }}
      onPressOut={() => navigate(to)}
    >
      <Text style={{ color: "#686de0", fontSize: 18 }}>Volver</Text>
    </TouchableOpacity>
  );
};
