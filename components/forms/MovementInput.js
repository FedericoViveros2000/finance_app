import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
export const MovementInput = ({
  title,
  nameInput,
  numeric,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ marginBottom: 10, fontSize: 14 }}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        inputMode={numeric ? "numeric" : "text"}
        onChangeText={(value) => handleChange(value, nameInput)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#7f8c8d",
    borderWidth: 1,
    borderRadius: 5,
  },
});
