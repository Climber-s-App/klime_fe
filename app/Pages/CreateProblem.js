import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Pressable, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";
import { v4 as uuid } from 'uuid';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const CreateProblem = ({vectorColor, setCurrentScreen}) => {
  const [newVectors, setNewVectors] = useState([]);
  useEffect(() => {
    setCurrentScreen('CreateProblem')
  }, []);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const addVector = { color: `#${vectorColor}`, x: locationX - 15, y: locationY - 15, id: uuid() };
    
    setNewVectors((prevVectors) => [...prevVectors, addVector])
  };

  const savedVectors = newVectors.map((vector) => {
    const {color, x, y, id} = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: 'absolute',
    };

    return (
      <Animated.View style={vectorStyle} key={id}>
        <AddVectors vectorColor={color} />
      </Animated.View>
    );
  }) 

  return (
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image} >
      <Pressable onPress={handlePress} style={styles.viewContainer}>
        {savedVectors}
      </Pressable>
    </ImageBackground>
  );
}

export default CreateProblem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    // height: "100%",
  },
  viewContainer: {
    flex: 1, 
  }
})