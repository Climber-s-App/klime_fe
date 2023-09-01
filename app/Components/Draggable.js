import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Animated } from "react-native";
import AddVectors from "../Components/AddVectors";

export default function Draggable({
  vectorStyle,
  vectorColor,
  vector,
  newVectors,
  setNewVectors,
  setAlertVisible,
  setTargetId,
}) {
  const updateNewVectors = (updatedVector) => {
    const updatedVectors = newVectors.map((v) =>
      v.id === updatedVector.id ? updatedVector : v
    );
    setNewVectors(updatedVectors);
  };

  const handleChange = (event) => {
    const { translationX, translationY } = event;
    const updatedVector = {
      ...vector,
      x: vector.initialX + translationX,
      y: vector.initialY + translationY,
    };
    updateNewVectors(updatedVector);
  };

  const handleFinalize = () => {
    const { x, y } = vector;
    const updatedVector = {
      ...vector,
      initialX: x,
      initialY: y,
    };
    selectedItem = { id: vector.id };
    updateNewVectors(updatedVector);
    setTargetId(vector.id);
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      handleChange(event);
    })
    .onFinalize((event) => {
      handleFinalize(event);
    });

  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      setAlertVisible(true);
    }
  });

  return (
    <GestureDetector gesture={Gesture.Exclusive(pan, longPressGesture)}>
      <Animated.View style={vectorStyle}>
        <AddVectors vectorColor={vectorColor} />
      </Animated.View>
    </GestureDetector>
  );
}
