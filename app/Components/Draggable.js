import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Animated } from "react-native";
import AddVectors from "../Components/AddVectors";
import { useState } from 'react';

export default function Draggable({
  vectorStyle,
  vectorColor,
  vector,
  newVectors,
  setNewVectors,
}) {
  const [circleToDelete, setCircleToDelete] = useState({});
  const [selectedCircle, setSelectedCircle] = useState({})

  const updateNewVectors = (updatedVector) => {
    const updatedVectors = newVectors.map((v) =>
      v.id === updatedVector.id ? updatedVector : v
    );

    setNewVectors(updatedVectors);
  };

  const deleteVector = (event, selectedItem) => {
    const updatedVectors = newVectors.filter((v) => 
      v.id !== selectedItem.id
    )

    setNewVectors(updatedVectors)
  }

  const handleChange = (event) => {
    const { translationX, translationY } = event;
    const updatedVector = {
      ...vector,
      x: vector.initialX + translationX,
      y: vector.initialY + translationY,
    };
    updateNewVectors(updatedVector);
  };

  const handleFinalize = (event) => {
    const { x, y } = vector;
    const updatedVector = {
      ...vector,
      initialX: x,
      initialY: y,
    };
    console.log('pan finalize updatedVector: ', updatedVector)
    selectedItem = {id: vector.id};
    updateNewVectors(updatedVector);
    setSelectedCircle({id: vector.id, eventX: event.x, eventY: event.y})
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      handleChange(event);
    })
    .onFinalize((event) => {
      handleFinalize(event);
      console.log('pan finalize event: ', event)
    });

  const longPressGesture = Gesture.LongPress().onEnd((e, success) => {
    if (success) {
      alert(`Do you want to delete this circle? Have to be yes now`);
      deleteVector(e, selectedItem)
    }
    console.log('long press event', e)
    console.log('long press selectedCircle: ', selectedCircle)
  });

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart((event) => {
      alert("singleTap");
    });

  // circleToDelete structure: {updatedVector id, pan finialize event x y}
  // long press
  // confirmation alert box
  // if clicked ok, delete
    // get selected circle position
    // find in new vectors
    // delete from new vectors
    // update new vectors state
  // if clicked cancel, close alert box and do nothing

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
