import { useNavigate } from "react-router-native";
import { TouchableOpacity, View } from "react-native";
import CreateBudgetCard from "../components/cards/budget/CreateBudgetCard";
import { ROUTES } from "../utils/ROUTES/routes.js";
import { IncomeCard } from "../components/cards/income/IncomeCard";

const SeparatorComponent = () => {
  return (
    <View
      style={{
        marginTop: 15,
      }}
    ></View>
  );
};

export function HomeScreen() {
  const navigate = useNavigate();
  return (
    <View>
      <SeparatorComponent />
      <TouchableOpacity
        activeOpacity={0.8}
        onPressOut={() => navigate(ROUTES.BUDGET_SCREEN)}
      >
        <CreateBudgetCard />
      </TouchableOpacity>
      <SeparatorComponent />
      <TouchableOpacity
        activeOpacity={0.8}
        onPressOut={() => navigate(ROUTES.MOVEMENTS)}
      >
        <IncomeCard />
      </TouchableOpacity>
    </View>
  );
}
