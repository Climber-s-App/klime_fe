import { Animated, PanResponder } from "react-native";
import { useState } from "react";
import AddVectors from "../Components/AddVectors";

export default function Marker({ style, key, vectorColor }) {
  const pan = useState(new Animated.ValueXY())[0];
  console.log("pan: ", pan);

  useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log("here");
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        console.log("grant panResponder pan: ", pan);
      },
      OnPanResponderMove: (...args) => {
        console.log("Args: ", { ...args });
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
    })
  )[0];

  console.log(pan.getLayout());

  return (
    <Animated.View style={style} key={key}>
      <AddVectors vectorColor={vectorColor} />
    </Animated.View>
  );
}
