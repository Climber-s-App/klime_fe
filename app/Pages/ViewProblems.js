import { useRef, useState } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";


const ViewProblems = () => {
  const [vectors, setVectors] = useState([{x: 40, y: 25}, {x: 120, y: 220}])
  
  // const handlePress = (event) => {
  //   const { locationX, locationY } = event.nativeEvent;

  //   Animated.spring(translate, {
  //     toValue: { x: locationX - 15, y: locationY - 15 },
  //     useNativeDriver: true,
  //   }).start();
  // };

  const addedVecors = vectors.map((vector) => {
    const {x, y} = vector;
    const translate = useRef(new Animated.ValueXY({x: x, y: y})).current;
    const vectorStyle = {
      transform: [{ translateX: translate.x }, { translateY: translate.y }],
    };

    return (
      <Animated.View style={vectorStyle}>
        <AddVectors  x={x} y={y}/>
      </Animated.View>
    );
  }) 

  return (
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image} >
      {/* <TouchableOpacity onPress={handlePress} style={styles.viewContainer}> */}
      {addedVecors}
      {/* </TouchableOpacity> */}
    </ImageBackground>
  );
}

export default ViewProblems;

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