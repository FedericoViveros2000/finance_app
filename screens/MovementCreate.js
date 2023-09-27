import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MovementInput } from "../components/forms/MovementInput";
import { setStorage } from "../utils/STORAGE/setStorage";
import { useNavigate } from "react-router-native";
import { ROUTES } from "../utils/ROUTES/routes";
import { STORAGE } from "../utils/ROUTES/CONSTANS/STORAGE";
import { getStorageData } from "../utils/STORAGE/getStorage";
import uuid from "react-native-uuid";
import { SelectList } from "react-native-dropdown-select-list";
import { NavBar } from "../components/navbar/NavBar";

const data = [
  { key: "1", value: "Ingreso" },
  { key: "2", value: "Egreso" },
];

export const MovementCreate = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState({
    reason: "",
    amount: "",
  });
  const handleInput = (value, name) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    getStorageData({
      name: STORAGE.MOVEMENTS,
    }).then((res) => {
      let storedValue =
        res !== null
          ? [
              ...res,
              {
                id: uuid.v4(),
                ...input,
                typeMovement: selected,
                date: new Date(),
              },
            ]
          : [
              {
                id: uuid.v4(),
                ...input,
                typeMovement: selected,
                date: new Date(),
              },
            ];
      setStorage({
        name: STORAGE.MOVEMENTS,
        values: storedValue,
      }).then(() => {
        navigate(ROUTES.MOVEMENTS);
      });
    });
  };

  return (
    <View>
      <NavBar to={ROUTES.MOVEMENTS} title="Volver" />
      <MovementInput
        nameInput="reason"
        value={input.reason}
        title="Motivo del movimiento?"
        placeholder="Motivo"
        handleChange={handleInput}
      />
      <MovementInput
        nameInput="amount"
        numeric={true}
        title="Que desea pagar?"
        placeholder="Monto"
        value={input.amount}
        handleChange={handleInput}
      />
      <View>
        <Text style={{ marginVertical: 10, fontSize: 14 }}>
          Tipo movimiento:{" "}
        </Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPressOut={handleSubmit}
      >
        <Text style={styles.text}>Agregar</Text>
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
    fontSize: 14,
  },
});
