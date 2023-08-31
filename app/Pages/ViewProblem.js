import { useRef, useEffect, useState, useContext } from "react";
import { ImageBackground, StyleSheet, Animated, View, Text } from "react-native";
import AddVectors from "../Components/AddVectors";
import { useRoute, useNavigation } from '@react-navigation/native';
import RouteContext from "../Components/RouteContext";


const ViewProblem = ({ route }) => {
  const newImage = route.params.image
  const [vectors, setVectors] = useState([])
  const currentScreen = useRoute();
  const navigation = useNavigation();
  const { setCurrentRoute } = useContext(RouteContext);
  
  useEffect(() => {
    setVectors(route.params.vectors)
  }, [])

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setCurrentRoute(currentScreen.name);
    });

    return () => {
      unsubscribeFocus();
    };
  }, [navigation, currentScreen, setCurrentRoute]);

  const addedVectors = vectors.map((vector) => {
    const { color, x, y, id } = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
    };

    return (
      <Animated.View style={vectorStyle} key={id}>
        <AddVectors vectorColor={color} />
      </Animated.View>
    );
  });

  return (
    <View resizeMode="cover" style={styles.image} >
      <ImageBackground source={{ uri: newImage }} resizeMode="cover" style={styles.image} >
        {addedVectors}
      </ImageBackground>
      <View style={styles.routeInfo}>
        <Text style={styles.routeInfoText}>{route.params.name}</Text>
        <Text style={styles.routeInfoText}>{route.params.grade}</Text>
      </View>
    </View>
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
    height: "95%"
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative'
  },
  routeInfo: {
    alignItems: "center",
    height: "5%",
    marginBottom: 10,
    justifyContent: "flex-end",
  },
  routeInfoText: {
    fontSize: 20,
    marginBottom: 5
  }
})