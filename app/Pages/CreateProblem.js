import { useState, useContext, useEffect } from "react";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  Animated,
} from "react-native";
import AddVectors from "../Components/AddVectors";
import { v4 as uuid } from "uuid";
import RouteContext from "../Components/RouteContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  Gesture,
  GestureDetector,
  State
} from "react-native-gesture-handler";

const CreateProblem = () => {
  const [newVectors, setNewVectors] = useState([]);
  const { setCurrentRoute, vectorColor } = useContext(RouteContext);
  const currentScreen = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      setCurrentRoute(currentScreen.name);
    });

    return () => {
      unsubscribeFocus();
    };
  }, [navigation, currentScreen, setCurrentRoute]);

  const handleSingleTap = (event) => {
    console.log(event)
    if (event.state === State.ACTIVE) {
      const { x, y } = event;
      const addVector = {
        color: `#${vectorColor}`,
        x: x - 15,
        y: y - 15,
        id: uuid(),
      };

      setNewVectors((prevVectors) => [...prevVectors, addVector]);
    }
  };

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart((event) => {
      handleSingleTap(event);
    });

  const savedVectors = newVectors.map((vector) => {
    const { color, x, y, id } = vector;
    const vectorStyle = {
      transform: [{ translateX: x }, { translateY: y }],
      position: "absolute",
    };

    return (
      <Animated.View style={vectorStyle} key={id}>
        <AddVectors vectorColor={color} />
      </Animated.View>
    );
  });

  return (
    <View style={styles.image}>
      <GestureDetector gesture={singleTap}>
        <View style={{ height: "100%", width: "100%" }}>
          <Image
            source={require("../assets/pexels-allan-mas-5383501.jpg")}
            resizeMode="cover"
            style={styles.image}
          />
          {savedVectors}
        </View>
      </GestureDetector>
    </View>
  );
};

export default CreateProblem;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
  viewContainer: {
    flex: 1,
    zIndex: 2,
  },
});
