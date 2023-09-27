import { useNavigate } from "react-router-native";
import { TouchableOpacity, View } from "react-native";
import CreateBudgetCard from "../components/cards/budget/CreateBudgetCard";
import { ROUTES } from "../utils/ROUTES/routes.js";
import { IncomeCard } from "../components/cards/income/IncomeCard";
import { getStorageData } from "../utils/STORAGE/getStorage";
import React, { useEffect, useState } from "react";
import { STORAGE } from "../utils/ROUTES/CONSTANS/STORAGE/index";

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
  const [data, setData] = useState();
  const [income, setIncome] = useState(0);
  const [egress, setEgress] = useState(0);
  const [budget, setBudget] = useState({
    amount: 0,
    percentage: 0,
  });
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
        getStorageData({
          name: STORAGE.BUDGET,
        }).then((bud) => {
          console.log(bud);
          const budgetFilter = bud.filter(
            (item) => new Date(item?.date).getMonth() === new Date().getMonth()
          );
          setBudget({
            amount: parseInt(budgetFilter[0].amount) || 0,
            percentage: parseInt(budgetFilter[0].alert),
          });
        });
        setIncome(reduceSum);
        setEgress(reduceEgress);
        setData(res);
      }
    });
  }, []);
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
        <IncomeCard
          income={income}
          egress={egress}
          alert={budget.percentage}
          budget={budget.amount}
        />
      </TouchableOpacity>
    </View>
  );
}
