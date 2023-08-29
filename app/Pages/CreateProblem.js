import React, { useRef, useState } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, ImageBackground, Pressable } from 'react-native';
import AddVectors from '../Components/AddVectors';
import { v4 as uuid } from 'uuid';

const CreateProblem = ({ vectorColor }) => {
  const [vectors, setVectors] = useState([
    { color: '#16e8f7', id: 'faskdf234wfw', pan: new Animated.ValueXY({ x: 43, y: 34 }) },
    { color: '#16e8f7', id: '2', pan: new Animated.ValueXY({ x: 43, y: 400 }) },
  ]);

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const newVector = {
      color: `#${vectorColor}`,
      id: uuid(),
      pan: new Animated.ValueXY({ x: locationX - 15, y: locationY - 15 }),
    };
    setVectors((prevVectors) => [...prevVectors, newVector]);
  };

  const panResponders = useRef({}).current;

  vectors.forEach((vector) => {
    if (!panResponders[vector.id]) {
      panResponders[vector.id] = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          vector.pan.setOffset({
            x: vector.pan.x._value,
            y: vector.pan.y._value,
          });
        },
        onPanResponderMove: (_, gesture) => {
          vector.pan.setValue({ x: gesture.dx, y: gesture.dy });
        },
        onPanResponderRelease: () => {
          vector.pan.flattenOffset();
          setVectors((prevVectors) => 
            prevVectors.map((prevVector) =>
              prevVector.id === vector.id ? { ...prevVector, x: vector.pan.x._value, y: vector.pan.y._value } : prevVector
            )
          );
        },
      });
    }
  });

  const savedVectors = vectors.map((vector) => (
    <Animated.View
      style={{
        transform: [
          { translateX: vector.pan.x },
          { translateY: vector.pan.y },
        ],
        position: 'absolute',
      }}
      key={vector.id}
      {...panResponders[vector.id].panHandlers}>
      <AddVectors vectorColor={vector.color} />
    </Animated.View>
  ));

  return (
    <ImageBackground source={require('../assets/pexels-allan-mas-5383501.jpg')} resizeMode="cover" style={styles.image}>
      <Pressable onPress={handlePress} style={styles.viewContainer}>
        {savedVectors}
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
  viewContainer: {
    flex: 1,
  },
});

export default CreateProblem;