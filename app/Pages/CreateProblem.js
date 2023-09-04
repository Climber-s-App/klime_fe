import { useContext, useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";
import { v4 as uuid } from "uuid";
import RouteContext from "../Components/RouteContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Gesture, GestureDetector, State } from "react-native-gesture-handler";
import Draggable from "../Components/Draggable";
import AlertBox from '../Components/AlertBox';

const CreateProblem = () => {
  const { setCurrentRoute, vectorColor, newVectors, setNewVectors, wallInfo } = useContext(RouteContext);
  const currentScreen = useRoute();
  const navigation = useNavigation();
  const [alertVisible, setAlertVisible] = useState(false);
  const [targetId, setTargetId] = useState({});

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {
      setCurrentRoute(currentScreen.name);
    });

    return () => {
      unsubscribeFocus();
    };
  }, [navigation, currentScreen, setCurrentRoute]);

  const handleSingleTap = (event) => {
    if (event.state === State.ACTIVE) {
      const { x, y } = event;
      const addVector = {
        color: `${vectorColor}`,
        x: x - 15,
        y: y - 15,
        initialX: x - 15,
        initialY: y - 15,
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
      position: 'absolute'
    };
    return <Draggable vectorStyle={vectorStyle} vectorColor={color} vector={vector} newVectors={newVectors} setNewVectors={setNewVectors} key={id} deleteVector={deleteVector} alertVisible={alertVisible} setAlertVisible={setAlertVisible} targetId={targetId} setTargetId={setTargetId}/>;
  });

  const deleteVector = (selectedId) => {
    const updatedVectors = newVectors.filter((v) => v.id !== selectedId);
    setNewVectors(updatedVectors);
  };

  return (
    <View style={styles.image}>
      <GestureDetector gesture={singleTap}>
        <View style={{ height: "100%", width: "100%" }}>
          <AlertBox alertVisible={alertVisible} setAlertVisible={setAlertVisible} deleteVector={deleteVector} targetId={targetId} />
          <Image
            source={{ uri: wallInfo.image }}
            resizeMode="contain"
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
  }
});
