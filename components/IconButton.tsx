import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
type props = {
  iconname: "reload" | "save";
};
export default function IconButton({ iconname }: props) {
  return (
    <View>
      <Ionicons name={iconname} size={24} color="black" />
    </View>
  );
}
