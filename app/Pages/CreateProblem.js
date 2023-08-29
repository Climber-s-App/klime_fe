import { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import AddVectors from "../Components/AddVectors";
import { v4 as uuid } from "uuid";
import {
  State,
  TapGestureHandler,
  PanGestureHandler,
} from "react-native-gesture-handler";

const CreateProblem = ({ vectorColor }) => {
  const [newVectors, setNewVectors] = useState([]);

  useEffect(() => {
    console.log("newVectors: ", newVectors);
  }, [newVectors]);
    

  const onSingleTap = (event) => {
    // alert("hi");
    if (event.nativeEvent.state === State.ACTIVE) {
      // alert("tap!");
      console.log("here");
      const { x, y } = event.nativeEvent;
      console.log("Tap native event: ", event.nativeEvent);
      const addVector = {
        color: `#${vectorColor}`,
        x: x - 15,
        y: y - 15,
        initialPositionX: x - 15,
        initialPositionY: y - 15,
        id: uuid(),
        animatedStartingPoint: new Animated.ValueXY({x, y})
      };

      // console.log('animated starting point: ', addVector.animatedStartingPoint)

      setNewVectors((prevVectors) => [...prevVectors, addVector]);
      console.log(newVectors);
      alert("newVectors");
    }
  };

  onPanGestureEvent = (event, vector) => {
    const { translationX, translationY } = event.nativeEvent;
    console.log('native event on pan guesture: ', event.nativeEvent)
    // console.log('pan anim start: ', vector.animatedStartingPoint)
    console.log('translationX, translationY', translationX, translationY)
    // const startX = vector.animatedStartingPoint.x;
    // const startY = vector.animatedStartingPoint.y;

    // console.log('startX, StartY: ', startX, startY)
    const updatedVector = {
      ...vector,
      x: vector.initialPositionX + translationX,
      y: vector.initialPositionY + translationY,
    };

    // console.log('updatedVector: ', updatedVector.x, updatedVector.y)
    // console.log('__________________')

    const updatedVectors = newVectors.map((v) =>
      v.id === updatedVector.id ? updatedVector : v
    );

    setNewVectors(updatedVectors);
  };

  const savedVectors = newVectors.map((vector, index) => {
    const { color, x, y, id } = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: "absolute",
    };

    return (
      <PanGestureHandler
        key={id}
        onGestureEvent={(event) => onPanGestureEvent(event, vector)}
        onPanHandlerStateChange={(event) => {
          if (event.nativeEvent.state === State.BEGAN) {
            const { x, y } = vector;
            const updatedVector = {
              ...vector,
              initialPositionX: x,
              initialPositionY: y
            };
            setNewVectors(newVectors.splice(index, 1, updatedVector));
          }
        }}
      >
        <Animated.View key={id} style={vectorStyle}>
          <AddVectors vectorColor={color} />
        </Animated.View>
      </PanGestureHandler>
    );
  });

  const doubleTapRef = useRef(null);

  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("double tapped!");
    }
  };

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: "100%",
    },
    viewContainer: {
      flex: 1,
    },
  });

  

  return (
    <>
      <Text>Double and Single Tap Gesture Handler</Text>
      <TapGestureHandler
        onHandlerStateChange={onSingleTap}
        waitFor={doubleTapRef}
      >
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={onDoubleTapEvent}
          numberOfTaps={2}
        >
          <View style={{ height: "100%", width: "100%" }}>
            <Image
              source={require("../assets/pexels-allan-mas-5383501.jpg")}
              resizeMode="cover"
              style={styles.image}
            />
            {savedVectors}
          </View>
        </TapGestureHandler>
      </TapGestureHandler>
    </>
  );
};

export default CreateProblem;
