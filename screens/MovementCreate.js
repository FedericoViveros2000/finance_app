import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export const MovementCreate = () => {
  return (
    <View>
      <View>
        <Text>Que vas a pagar?</Text>
        <TextInput placeholder="Motivo" />
      </View>
      <View>
        <Text>Monto a pagar</Text>
        <TextInput placeholder="Monto" />
      </View>
      <View>
        <Text>Fecha de egreso</Text>
        <TextInput placeholder="Monto" />
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text>Pagar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={styles.text}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#16a085",
    borderRadius: 50,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
