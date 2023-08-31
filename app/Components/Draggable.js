import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Animated } from "react-native";
import AddVectors from "../Components/AddVectors";

export default function Draggable({
  vectorStyle,
  vectorColor,
  vector,
  newVectors,
  setNewVectors,
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
    updateNewVectors(updatedVector);
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      handleChange(event);
    })
    .onFinalize(() => {
      handleFinalize();
    });

  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      alert(`Long pressed for ${e.duration} ms!`);
    }
  });

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart((event) => {
      alert("singleTap");
    });

  return (
    <GestureDetector gesture={pan}>
      <GestureDetector gesture={longPressGesture}>
        <GestureDetector gesture={singleTap}>
          <Animated.View style={vectorStyle}>
            <AddVectors vectorColor={vectorColor} />
          </Animated.View>
        </GestureDetector>
      </GestureDetector>
    </GestureDetector>
  );
}
