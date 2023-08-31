import { useState } from "react";
import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import ViewProblem from "./app/Pages/ViewProblem";
import CreateProblem from "./app/Pages/CreateProblem";
import Home from "./app/Pages/Home";
import MenuBar from "./app/Components/MenuBar";
import RouteContext from "./app/Components/RouteContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewAllProblems from "../klime_fe/app/Pages/ViewAllProblems";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [currentRoute, setCurrentRoute] = useState("Home");
  const [vectorColor, setVectorColor] = useState("60FF46");

  const handleVectorColor = (color) => {
    switch (color) {
      case "60FF46":
        setVectorColor("16e8f7");
        break;
      case "16e8f7":
        setVectorColor("f72556");
        break;
      case "f72556":
        setVectorColor("60FF46");
        break;
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <RouteContext.Provider
      value={{ currentRoute, setCurrentRoute, vectorColor }}
    >
      <NavigationContainer
        style={{ ...styles.container, ...styles.androidSafeArea }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="View All Problems" component={ViewAllProblems} />
          <Stack.Screen name="View Problem" component={ViewProblem} />
          <Stack.Screen name="Create Problem" component={CreateProblem} />
        </Stack.Navigator>
      
          <SafeAreaView>
            <StatusBar />
            <View style={styles.contentContainer} />
            <View style={styles.menuContainer}>
              <MenuBar
                vectorColor={vectorColor}
                handleVectorColor={handleVectorColor}
              />
            </View>
          </SafeAreaView>
      
      </NavigationContainer>
    </RouteContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  menuContainer: {
    bottom: 0,
    width: "100%",
  },
});
