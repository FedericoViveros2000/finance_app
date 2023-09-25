import { NativeRouter, Routes, Route } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { CreateBudgetScreen } from "./screens/CreateBudgetScreen";
import { ROUTES } from "./utils/ROUTES/routes";
import { BudgetScreen } from "./screens/BudgetScreen";

export default function Main() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
          <Route path={ROUTES.BUDGET_SCREEN} element={<BudgetScreen />} />
          <Route path={ROUTES.CREATE_BUDGET} element={<CreateBudgetScreen />} />
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
