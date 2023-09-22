import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Slider } from "@react-native-assets/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateBudgetScreen = () => {
  const [amount, setAmount] = useState("");
  const [amountPercentage, setAmountPercenge] = useState({
    percentage: 0,
    amount: 0,
  });

  const saveBudget = async () => {
    try {
      await AsyncStorage.setItem("Test", amount.toString());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Presupuestos</Text>
      <View>
        <View>
          <Text>Que monto?</Text>
          <TextInput
            placeholder="Que monto desea registrar"
            onChangeText={setAmount}
            value={amount}
          />
          <Text>{amount}</Text>
        </View>
        <View>
          <Text>Porcentaje de alerta?</Text>
          <Slider
            value={amountPercentage.percentage}
            minimumValue={0}
            maximumValue={100}
            step={10}
            onValueChange={(e) =>
              setAmountPercenge({
                percentage: e,
              })
            }
          />
          <Text>Monto: {amountPercentage.amount}</Text>
        </View>
        <Text>Fecha de inicio</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPressOut={saveBudget}
        >
          <Text style={[styles.textCenter, styles.textColor]}>
            Guardar Cambios
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
    backgroundColor: "red",
    paddingVertical: 10,
    borderRadius: 10,
  },
  textCenter: {
    textAlign: "center",
  },
  textColor: {
    color: "#fff",
  },
});

export { CreateBudgetScreen };
