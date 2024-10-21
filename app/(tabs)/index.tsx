import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import { useState } from "react";
import Emojipicker from "@/components/EmojiPicker";
export default function Index() {
  const [imageuri, setimageuri] = useState("");
  const [showmodal, setshowmodal] = useState<boolean>(false);
  const [emojimodal, setemojimodal] = useState<boolean>(true);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      // console.log(result);
      setimageuri(result.assets[0].uri);
      setshowmodal(true);
    } else {
      alert("You did not selected the image");
    }
  };
  const onclose = () => {
    setemojimodal(false);
  };
  return (
    <>
      <ImageViewer imageuri={imageuri} />
      {showmodal ? (
        <View style={styles.buttoncontainer1}>
          <IconButton iconname="reload" />
          <CircleButton />
          <IconButton iconname="save" />
        </View>
      ) : (
        <View style={styles.buttoncontainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            pressfunc={pickImageAsync}
          />
          <Button label="Use this photo" />
        </View>
      )}
      <Emojipicker emojimodal={emojimodal} onclose={onclose}></Emojipicker>
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
  buttoncontainer: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#8a0c2e",
  },
  buttoncontainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    backgroundColor: "#8a0c2e",
  },
});
