import { useRef } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";


const CreateProblem = () => {
  const translate = useRef(new Animated.ValueXY({x: 40, y: 46})).current;
  
  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;

    Animated.spring(translate, {
      toValue: { x: locationX - 15, y: locationY - 15 },
      useNativeDriver: true,
    }).start();
  };

  const vectorStyle = {
    transform: [{ translateX: translate.x }, { translateY: translate.y }],
  };

  return (
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image} >
      <TouchableOpacity onPress={handlePress} style={styles.viewContainer}>
      <Animated.View style={vectorStyle}>
        {/* {vector} */}
        <AddVectors />
        </Animated.View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default CreateProblem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    top: 0,
    position: 'relative',
    width: '100%',
    height: "100%"
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',     
    position: 'relative'    
  }
})