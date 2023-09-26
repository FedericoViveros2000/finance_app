import { ButtonMovement } from "../components/buttons/ButtonNewMovement";
import { MovementCardItem } from "../components/cards/budget/MovementCardItem";
import { NavBar } from "../components/navbar/NavBar";
import { SeparatorComponent } from "../components/separator/SeparatorSection";
import { MovementsTable } from "../components/tables/MovementsTable";
import { ROUTES } from "../utils/ROUTES/routes";
import { View, Text, StyleSheet, ScrollView } from "react-native";
export const MovementsScreen = () => {
  return (
    <View style={style.container}>
      <NavBar to={ROUTES.HOME} />
      <MovementsTable />
      <SeparatorComponent />
      <ScrollView style={{ paddingBottom: 20 }}>
        <View>
          <Text style={style.fontMd}>Movimientos</Text>
          <SeparatorComponent />
          <MovementCardItem />
        </View>
      </ScrollView>
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
