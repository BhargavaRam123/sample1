import { StyleSheet, Pressable, View, Text } from "react-native";
type props = {
  label: string;
  theme?: "primary";
  pressfunc?: () => void;
};
export default function Button({ label, theme, pressfunc }: props) {
  if (theme === "primary") {
    return (
      <>
        <View style={styles.buttoncontainer1}>
          <Pressable onPress={() => pressfunc && pressfunc()}>
            <Text style={styles.textcontainer}>{label}</Text>
          </Pressable>
        </View>
      </>
    );
  }
  return (
    <>
      <View style={styles.buttoncontainer2}>
        <Pressable onPress={() => alert("You clicked a button")}>
          <Text>{label}</Text>
        </Pressable>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  buttoncontainer1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "black",
    width: 150,
    height: 30,
  },
  buttoncontainer2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    width: 150,
    height: 30,
  },
  textcontainer: {
    color: "white",
  },
});
