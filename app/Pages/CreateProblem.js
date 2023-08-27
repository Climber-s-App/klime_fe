import { useRef } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Svg, {  Path } from 'react-native-svg';


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

  const vector = <Animated.View style={vectorStyle}>
                   <Svg width="30" height="30" viewBox="0 0 71 72" fill="none" >
                    <Path d="M66 36C66 53.187 52.279 67 35.5 67C18.721 67 5 53.187 5 36C5 18.813 18.721 5 35.5 5C52.279 5 66 18.813 66 36Z" stroke="#60FF46" strokeWidth="10"/>
                   </Svg>
                 </Animated.View>;

  return(
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image} >
      <TouchableOpacity onPress={handlePress} style={styles.viewContainer}>
        {vector}
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