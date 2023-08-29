import { useState } from "react";
import { ImageBackground, StyleSheet, Pressable, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";
import { v4 as uuid } from "uuid";
import { TapGestureHandler } from "react-native-gesture-handler";

const CreateProblem = ({ vectorColor }) => {
  const [newVectors, setNewVectors] = useState([]);

  const onSingleTap = (event) => {
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

    return (
      <Animated.View key={id}>
        <TapGestureHandler
          onHandlerStateChange={onSingleTap}
          style={styles.viewContainer}
        >
          <AddVectors vectorColor={color} />
        </TapGestureHandler>
      </Animated.View>
    );
  });

  return (
    <ImageBackground
      source={require("../assets/pexels-allan-mas-5383501.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      {/* {savedVectors} */}
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
