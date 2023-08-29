import { Animated, PanResponder } from "react-native";
import AddVectors from "../Components/AddVectors";

export default function Marker({ style, vector }) {
  return (
    <Animated.View style={style}>
      <AddVectors vectorColor={vector.color} />
    </Animated.View>
  );
}
