import { useNavigate } from "react-router-native";
import { TouchableOpacity, View } from "react-native";
import BudgetCard from "../components/cards/budget/BudgetCard";
import { ROUTES } from "../utils/ROUTES/routes.js";

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
        onPressOut={() => navigate(ROUTES.CREATE_BUDGET)}
      >
        <BudgetCard />
      </TouchableOpacity>
    </View>
  );
}
