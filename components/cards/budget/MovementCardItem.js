import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { SeparatorComponent } from "../../separator/SeparatorSection";
import { setStorage } from "../../../utils/STORAGE/setStorage";
import { STORAGE } from "../../../utils/ROUTES/CONSTANS/STORAGE";
import { formatMoney } from "../../../utils/formatMoney";

export const MovementCardItem = ({
  data,
  allData,
  setNewData,
  reason,
  amount,
  date,
}) => {
  const dateDisplay = `${new Date(date).getMonth()}/${new Date(
    date
  ).getFullYear()}`;
  const [viewOptions, setViewOptions] = useState(false);
  const handleLongPress = () => {
    setViewOptions(true);
  };
  const handleDelete = (data) => {
    const newData = allData.filter((item) => item.id !== data.id);
    setStorage({
      name: STORAGE.MOVEMENTS,
      values: newData,
    }).then((res) => {
      setNewData(newData);
    });
  };
  return (
    <View>
      <SeparatorComponent />
      <TouchableWithoutFeedback onLongPress={() => handleLongPress()}>
        <View style={styles.container}>
          <View style={[styles.flexRow, styles.spaceBetween]}>
            <Text style={styles.textWhite}>Pago: {reason}</Text>
            <Text style={styles.textWhite}>Abrir</Text>
          </View>
          <View style={[styles.flexRow, styles.spaceBetween]}>
            <Text style={styles.textWhite}>{formatMoney(amount)}</Text>
            <Text style={styles.textWhite}>{dateDisplay}</Text>
          </View>
          {viewOptions && (
            <TouchableWithoutFeedback onPressOut={() => handleDelete(data)}>
              <Text style={[styles.textWhite, styles.btn]}>Eliminar</Text>
            </TouchableWithoutFeedback>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#183D3D",
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
    fontSize: 16,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#2980b9",
    padding: 10,
    borderRadius: 10,
  },
});
