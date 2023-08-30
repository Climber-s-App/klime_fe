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
  console.log('vectorStyle: ', vectorStyle)
  const handleChange = (event) => {
    const { translationX, translationY } = event;
   
    const updatedVector = {
      ...vector,
      x: vector.initialX + translationX,
      y: vector.initialY + translationY,
    };

    const updatedVectors = newVectors.map((v) =>
      v.id === updatedVector.id ? updatedVector : v
    );
    setNewVectors(updatedVectors);

  };

  const handleFinalize = (event) => {};

  const pan = Gesture.Pan()
    .onBegin((event) => {})
    .onChange((event) => {
      console.log(event);
      handleChange(event)
    })
    .onFinalize((event) => {
      alert("end");
    });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={vectorStyle}>
        <AddVectors vectorColor={vectorColor} />
      </Animated.View>
    </GestureDetector>
  );
}
