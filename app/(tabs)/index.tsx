import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD</Text>
      <Link href="/about" style={styles.button}>
        Go to about screen
      </Link>
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
  button: {
    color: "white",
    textDecorationLine: "underline",
  },
});
