import { NativeRouter, Routes, Route } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { CreateBudgetScreen } from "./screens/CreateBudgetScreen";
import { ROUTES } from "./utils/ROUTES/routes";
import { BudgetScreen } from "./screens/BudgetScreen";
import { BudgetScreenDetails } from "./screens/BudgetScreenDetails";
import { MovementsScreen } from "./screens/MovementsScreen";
import { MovementCreate } from "./screens/MovementCreate";

export default function Main() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
          <Route path={ROUTES.BUDGET_SCREEN} element={<BudgetScreen />} />
          <Route path={ROUTES.CREATE_BUDGET} element={<CreateBudgetScreen />} />
          <Route
            path={ROUTES.BUDGET_DETAILS}
            element={<BudgetScreenDetails />}
          />
          <Route path={ROUTES.MOVEMENTS} element={<MovementsScreen />} />
          <Route path={ROUTES.MOVEMENTS_CREATE} element={<MovementCreate />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
