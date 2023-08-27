import { useRef, useState } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";


const CreateProblem = () => {
  const [newVectors, setNewVectors] = useState([])
  
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const addVector = { x: locationX - 15, y: locationY - 15 };
    setNewVectors((prevVectors) => [...prevVectors, addVector])
  };

  const addedVecors = newVectors.map((vector) => {
    const {x, y} = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: 'absolute',
    };

    return (
      <Animated.View style={vectorStyle}>
        <AddVectors />
      </Animated.View>
    );
  }) 

  return (
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image} >
      <TouchableOpacity onPress={handlePress} style={styles.viewContainer}>
        {addedVecors}
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default CreateProblem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: "100%"
  },
  viewContainer: {
    flex: 1, 
  }
})