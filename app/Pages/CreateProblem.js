import { useState } from "react";
import { ImageBackground, StyleSheet, Pressable, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";


const CreateProblem = ({vectorColor}) => {
  const [newVectors, setNewVectors] = useState([{ x: 125, y: 650 }])
  
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const addVector = { color: `#${vectorColor}`, x: locationX - 15, y: locationY - 15 };
    
    setNewVectors((prevVectors) => [...prevVectors, addVector])
  };

  const savedVectors = newVectors.map((vector) => {
    const {color, x, y} = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: 'absolute',
    };

    return (
      <Animated.View style={vectorStyle}>
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
  // viewContainer: {
  //   flex: 1, 
  // }
})