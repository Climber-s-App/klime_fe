import { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Animated,
  Image
} from "react-native";
import AddVectors from "../Components/AddVectors";
import { v4 as uuid } from "uuid";
import { State, TapGestureHandler, PanGestureHandler } from "react-native-gesture-handler";

const CreateProblem = ({ vectorColor }) => {
  const [newVectors, setNewVectors] = useState([]);

  useEffect(() => {
    console.log('newVectors: ', newVectors)
  }, [newVectors])

  const onSingleTap = (event) => {
    // alert("hi");
    if (event.nativeEvent.state === State.ACTIVE) {
      // alert("tap!");
      console.log("here");
      const { x, y } = event.nativeEvent;
      console.log('native event: ', event.nativeEvent)
      const addVector = {
        color: `#${vectorColor}`,
        x: x - 15,
        y: y - 15,
        id: uuid(),
      };
  
      setNewVectors((prevVectors) => [...prevVectors, addVector]);
      console.log(newVectors)
      alert('newVectors')
    }
  };

  onPanGestureEvent = (event, vector) => {
    const { translationX, translationY } = event.nativeEvent;

    const updatedVector = {
      ...vector, 
      x: vector.x + translationX,
      y: vector.y + translationY
    };

    const updatedVectors = newVectors.map(v => 
      v.id === updatedVector.id ? updatedVector : v
    );

    setNewVectors(updatedVectors);
  }

  const savedVectors = newVectors.map((vector) => {
    const { color, x, y, id } = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: "absolute",
    };

    return (
      // <TapGestureHandler
      //   onHandlerStateChange={onSingleTap}
      //   numberOfTaps={1}
      //   style={styles.viewContainer}
      // >
      <PanGestureHandler
        key={id}
        onGestureEvent={(event) => onPanGestureEvent(event, vector)}
      >
        <Animated.View key={id} style={vectorStyle}>
          <AddVectors vectorColor={color} />
        </Animated.View>
      </PanGestureHandler>
    );
  });

  const [likeColour, setLikeColour] = useState("#28b5b5");
  const doubleTapRef = useRef(null);

  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('double tapped!')
      likeColour === "#28b5b5"
        ? setLikeColour("red")
        : setLikeColour("#28b5b5");
    }
  };

  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("Hey long press!");
    }
  };

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: "100%",
      // height: "100%",
    },
    viewContainer: {
      flex: 1,
    },
    square: {
      width: 150,
      height: 150,
      backgroundColor: `${likeColour}`,
      marginTop: 22,
      marginBottom: 22,
    },
  });

  const backgroundImage = (
    <ImageBackground
      source={require("../assets/pexels-allan-mas-5383501.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View>{savedVectors}</View>
    </ImageBackground>
  );

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
            {/* <View style={styles.square} /> */}
            <View style={{height: '100%', width: '100%'}}>
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
