import { Text, View, StyleSheet } from "react-native";
import { formatMoney } from "../../utils/formatMoney";
export const MovementsTable = ({ income, egress }) => {
  return (
    <View style={styles.flexGap}>
      <View style={styles.containerFlex}>
        <Text style={styles.textSize}>Ingreso</Text>
        <Text style={styles.textSize}>{formatMoney(income)}</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textSize}>Egreso</Text>
        <Text style={styles.textSize}>{formatMoney(egress)}</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text style={styles.textSize}>Total General</Text>
        <Text style={styles.textSize}>{formatMoney(egress - income)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexGap: {
    gap: 10,
  },
  textSize: {
    fontSize: 16,
  },
});
