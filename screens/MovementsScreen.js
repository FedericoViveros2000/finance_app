import { useEffect, useState } from "react";
import { ButtonMovement } from "../components/buttons/ButtonNewMovement";
import { MovementCardItem } from "../components/cards/budget/MovementCardItem";
import { NavBar } from "../components/navbar/NavBar";
import { SeparatorComponent } from "../components/separator/SeparatorSection";
import { MovementsTable } from "../components/tables/MovementsTable";
import { ROUTES } from "../utils/ROUTES/routes";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { getStorageData } from "../utils/STORAGE/getStorage";
import { STORAGE } from "../utils/ROUTES/CONSTANS/STORAGE";
export const MovementsScreen = () => {
  const [data, setData] = useState();
  const [income, setIncome] = useState(0);
  const [egress, setEgress] = useState(0);
  useEffect(() => {
    getStorageData({
      name: STORAGE.MOVEMENTS,
    }).then((res) => {
      if (res !== null) {
        const filterIncome = res.filter(
          (item) => item.typeMovement === "Ingreso"
        );
        const reduceSum = filterIncome.reduce(
          (accumulator, currentValue) =>
            accumulator + parseInt(currentValue.amount),
          0
        );
        const filterEgress = res.filter(
          (item) => item.typeMovement === "Egreso"
        );
        const reduceEgress = filterEgress.reduce(
          (accumulator, currentValue) =>
            accumulator + parseInt(currentValue.amount),
          0
        );
        setIncome(reduceSum);
        setEgress(reduceEgress);
        setData(res);
      }
    });
  }, []);
  return (
    <View style={style.container}>
      <NavBar to={ROUTES.HOME} />
      <MovementsTable egress={egress} income={income} />
      <SeparatorComponent />
      <View>
        <Text style={style.fontMd}>Movimientos</Text>
        <SeparatorComponent />
        {data !== null && (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <MovementCardItem
                amount={item?.amount}
                date={item?.date}
                key={item?.id}
                data={item}
                allData={data}
                setNewData={setData}
                reason={item?.reason}
              />
            )}
            keyExtractor={(item) => item?.id}
          />
        )}
      </View>
      <ButtonMovement />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  fontMd: {
    fontSize: 16,
  },
});
