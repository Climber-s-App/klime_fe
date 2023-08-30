import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Animated } from "react-native";
import AddVectors from "../Components/AddVectors";

export default function Draggable({ vectorStyle, vectorColor }) {
  const pan = Gesture.Pan()
    .onBegin(() => {})
    .onChange(() => {})
    .onFinalize(() => {});
  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={vectorStyle}>
        <AddVectors vectorColor={vectorColor} />
      </Animated.View>
    </GestureDetector>
  );
}
