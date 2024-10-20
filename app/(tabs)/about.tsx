import { StyleSheet, Text, View } from "react-native";
export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a0c2e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
