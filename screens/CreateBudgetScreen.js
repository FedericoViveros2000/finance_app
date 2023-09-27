import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import uuid from "react-native-uuid";
import { Slider } from "@react-native-assets/slider";
import { useNavigate } from "react-router-native";
import { NavBar } from "../components/navbar/NavBar";
import { ROUTES } from "../utils/ROUTES/routes";
import { STORAGE } from "../utils/ROUTES/CONSTANS/STORAGE";
import { setStorage } from "../utils/STORAGE/setStorage";
import { getStorageData } from "../utils/STORAGE/getStorage";
import { MovementInput } from "../components/forms/MovementInput";

const CreateBudgetScreen = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const [amountPercentage, setAmountPercenge] = useState({
    percentage: 0,
    amount: 0,
  });

  const saveBudget = async () => {
    getStorageData({
      name: STORAGE.BUDGET,
    }).then((res) => {
      let storedValue =
        res !== null
          ? [
              ...res,
              {
                id: uuid.v4(),
                amount,
                date: new Date(),
                alert: amountPercentage.percentage,
              },
            ]
          : [
              {
                id: uuid.v4(),
                amount,
                date: new Date(),
                alert: amountPercentage.percentage,
              },
            ];
      setStorage({
        name: STORAGE.BUDGET,
        values: storedValue,
      }).then((res) => navigate(ROUTES.BUDGET_SCREEN));
      return;
    });
  };

  return (
    <View>
      <NavBar to={ROUTES.BUDGET_SCREEN} title="Volver" />
      <Text style={{ fontSize: 16 }}>Presupuestos</Text>
      <View>
        <View>
          <MovementInput
            nameInput="amount"
            value={amount}
            title="Que monto?"
            placeholder="Monto"
            handleChange={setAmount}
          />
          {/* <Text>Que monto?</Text>
          <TextInput
            placeholder="Que monto desea registrar"
            onChangeText={setAmount}
            value={amount}
          /> */}
          <Text>{amount}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16 }}>Porcentaje de alerta?</Text>
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
          <Text style={{ fontSize: 16 }}>
            Porcentaje: {amountPercentage.percentage}
          </Text>
        </View>
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
