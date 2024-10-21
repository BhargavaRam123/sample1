import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
const placeholder = require("@/assets/images/default.jpg");
type props = {
  imageuri?: string;
};
export default function ImageViewer({ imageuri }: props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image
            source={imageuri ? imageuri : placeholder}
            style={styles.image}
          />
        </View>
      </View>
    </>
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
  image: {
    width: 300,
    height: 600,
    borderRadius: 10,
  },
  imagecontainer: {
    flex: 1,
  },
});
