import { Text, View, StyleSheet } from "react-native";
export const MovementsTable = () => {
  return (
    <View style={styles.flexGap}>
      <View style={styles.containerFlex}>
        <Text>Ingreso</Text>
        <Text>10000</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text>Egreso</Text>
        <Text>10000</Text>
      </View>
      <View style={styles.containerFlex}>
        <Text>Total General</Text>
        <Text>10000</Text>
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
});
