import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { formatMoney } from "../../../utils/formatMoney";
import { SeparatorComponent } from "../../separator/SeparatorSection";
import { setStorage } from "../../../utils/STORAGE/setStorage";
import { STORAGE } from "../../../utils/ROUTES/CONSTANS/STORAGE";
import { useNavigate } from "react-router-native";
import { ROUTES } from "../../../utils/ROUTES/routes";
import { getStorageData } from "../../../utils/STORAGE/getStorage";
export const BudgetCardDetails = ({ data }) => {
  const navigate = useNavigate();
  const dateView = `${new Date(data?.date)?.getMonth()}/${new Date(
    data?.date
  )?.getFullYear()}`;
  const handleDelete = (deleteData) => {
    getStorageData({
      name: STORAGE.BUDGET,
    }).then((allData) => {
      const newAllData = allData?.filter((item) => item?.id !== deleteData?.id);
      setStorage({
        name: STORAGE.BUDGET,
        values: newAllData,
      }).then((res) => {
        navigate(ROUTES.BUDGET_SCREEN);
      });
    });
  };
  return (
    <View style={style.container}>
      <Text style={style.textWhite}>Detalles del Presupuesto</Text>
      <View>
        <Text style={style.textWhite}>Presupuesto Asignado</Text>
        <Text style={style.textWhite}>{formatMoney(data?.amount)}</Text>
      </View>
      <View style={style.flexContainer}>
        <Text style={style.textWhite}>Alerta configurada al: </Text>
        <Text style={style.textWhite}>{data?.alert} %</Text>
      </View>
      <View style={style.flexContainer}>
        <Text style={style.textWhite}>Mes/Año: </Text>
        <Text style={style.textWhite}>{dateView}</Text>
      </View>
      <SeparatorComponent />
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPressOut={() => handleDelete(data)}
        >
          <Text style={[style.textCenter, style.btn]}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#183D3D",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#028f76",
    borderRadius: 10,
    paddingVertical: 10,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textWhite: {
    color: "white",
    lineHeight: 30,
  },
  textCenter: {
    textAlign: "center",
    color: "white",
  },
});
