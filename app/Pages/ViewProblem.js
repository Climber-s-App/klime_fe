import { useRef, useState } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, Animated } from "react-native";
import AddVectors from "../Components/AddVectors";


const ViewProblem = () => {
  const [vectors, setVectors] = useState([{color: '#16e8f7', x: 40, y: 37}, {color: '#60FF46', x: 155, y: 190}])

  const addedVecors = vectors.map((vector, index) => {
    const {x, y} = vector;
    const translate = useRef(new Animated.ValueXY({x: x, y: y})).current;
    const vectorStyle = {
      transform: [{ translateX: translate.x }, { translateY: translate.y }],
    };

    return (
      <Animated.View style={vectorStyle} key={index}>
        <AddVectors  vectorColor={vector.color}/>
      </Animated.View>
    );
  });

  return (
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image} >
      {addedVecors}
    </ImageBackground>
  );
}

export default ViewProblem;

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