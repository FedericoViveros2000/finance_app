import { View, Text, StyleSheet } from "react-native";
const BudgetCard = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textColor, styles.textMd]}>Presupuesto</Text>
      <View style={styles.containerDashed}>
        <Text style={[styles.textColor, styles.textCenter, styles.textSm]}>
          Crea un Presupuesto para este mes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4c4f56",
    width: "100%",
    padding: 20,
    borderRadius: 10,
  },
  textMd: {
    fontSize: 20,
  },
  textSm: {
    fontSize: 16,
  },
  textCenter: {
    textAlign: "center",
  },
  textColor: {
    color: "white",
  },
  containerDashed: {
    marginTop: 15,
    borderWidth: 2,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    borderStyle: "dashed",
  },
});

export default BudgetCard;
