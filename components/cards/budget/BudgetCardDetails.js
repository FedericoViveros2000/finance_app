import React from "react";
import { Text, View, StyleSheet } from "react-native";
export const BudgetCardDetails = ({ data }) => {
  const dateView = `${new Date(data?.date)?.getMonth()}/${new Date(
    data?.date
  )?.getFullYear()}`;
  return (
    <View style={style.container}>
      <Text style={style.textWhite}>Detalles del Presupuesto</Text>
      <View>
        <Text style={style.textWhite}>Presupuesto Asignado</Text>
        <Text style={style.textWhite}>{data?.amount} (PYG)</Text>
      </View>
      <View style={style.flexContainer}>
        <Text style={style.textWhite}>Alerta configurada al: </Text>
        <Text style={style.textWhite}>{data?.alert} %</Text>
      </View>
      <View style={style.flexContainer}>
        <Text style={style.textWhite}>Mes/Año: </Text>
        <Text style={style.textWhite}>{dateView}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#686de0",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textWhite: {
    color: "white",
    lineHeight: 30,
  },
});
