import { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  PanResponder,
} from "react-native";
import { v4 as uuid } from "uuid";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Marker from "../Components/Marker";
import AddVectors from "../Components/AddVectors";
import { TapGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import Svg, {  Path } from 'react-native-svg';
import { View } from 'react-native';



const CreateProblem = ({ vectorColor, setCurrentScreen }) => {
  const [newVectors, setNewVectors] = useState([]);
  useEffect(() => {
    setCurrentScreen("CreateProblem");
  }, []);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const addVector = {
      color: `#${vectorColor}`,
      x: locationX - 15,
      y: locationY - 15,
      id: uuid(),
    };

    setNewVectors((prevVectors) => [...prevVectors, addVector]);
  };

  const savedVectors = newVectors.map((vector) => {
    const { color, x, y, id } = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: "absolute",
    };
    const translateX = useSharedValue(vector.x);
    const translateY = useSharedValue(vector.y);
    
    const onDrag = useAnimatedGestureHandler({
      onStart: (event, context) => {
        context.translateX = translateX.value;
        context.translateY = translateY.value;
      },
      onActive: (event, context) => {
        translateX.value = event.translationX + context.translationX;
        translateY.value = event.translationY + context.translationY;
      }
    });

    return (
      <Pressable onPress={handlePress} onLongPress={onDrag} style={styles.viewContainer}>
        <Marker size={30} style={vectorStyle} key={id} vector={vector} />
      </Pressable>
    )
  });

  

  return (
    <ImageBackground
      source={require("../assets/pexels-allan-mas-5383501.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
    {savedVectors}
    </ImageBackground>
  );
};

export default CreateProblem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    // height: "100%",
  },
  viewContainer: {
    flex: 1,
  },
});
