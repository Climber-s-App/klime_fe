import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Animated, Alert } from "react-native";
import AddVectors from "../Components/AddVectors";
import { useState } from "react";


export default function Draggable({
  vectorStyle,
  vectorColor,
  vector,
  newVectors,
  setNewVectors,
}) {
  const [targetId, setTargetId] = useState({});

  const updateNewVectors = (updatedVector) => {
    const updatedVectors = newVectors.map((v) =>
      v.id === updatedVector.id ? updatedVector : v
    );

    setNewVectors(updatedVectors);
  };

  const deleteVector = (selectedId) => {
    const updatedVectors = newVectors.filter((v) => v.id !== selectedId);

    setNewVectors(updatedVectors);
  };

  const alertDelete = () => {
    Alert.alert('Do you want to Delete this circle?', 'My Alert Msg', [
      {
        text: 'CANCEL',
        style: 'cancel'
      },
      {
        text: 'DELETE',
        onPress: () => deleteVector(targetId)

      }
    ])
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

  const longPressGesture = Gesture.LongPress()
    .onEnd((e, success) => {
      if (success) {
        alertDelete()
        // deleteVector(targetId);
      }
    });

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
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
      <GestureDetector gesture={Gesture.Exclusive(pan, longPressGesture)}>
        <GestureDetector gesture={singleTap}>
          <Animated.View style={vectorStyle}>
            <AddVectors vectorColor={vectorColor} />
          </Animated.View>
        </GestureDetector>
      </GestureDetector>
  );
}
