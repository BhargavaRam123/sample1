import { PropsWithChildren } from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
type props = PropsWithChildren<{
  emojimodal: boolean;
  onclose: () => void;
}>;
export default function Emojipicker({ emojimodal, children, onclose }: props) {
  return (
    <View>
      <Modal visible={emojimodal} transparent={true} animationType="slide">
        <View style={styles.modalcontainer}>
          <View style={styles.headingcontainer}>
            <View>
              <Text>Choose a sticker</Text>
            </View>
            <View>
              <Entypo name="cross" size={24} color="black" onPress={onclose} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  modalcontainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "grey",
    width: "100%",
    height: "25%",
  },
  headingcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 100,
    borderWidth: 1,
  },
});
