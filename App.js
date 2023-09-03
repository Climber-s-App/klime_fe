import { useState } from "react";
import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import ViewProblem from "./app/Pages/ViewProblem";
import CreateProblem from "./app/Pages/CreateProblem";
import Home from "./app/Pages/Home";
import MenuBar from "./app/Components/MenuBar";
import RouteContext from "./app/Components/RouteContext";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewAllProblems from "../klime_fe/app/Pages/ViewAllProblems";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { postProblem, getAllProblems } from "./app/Components/apiCalls";
import Toast  from 'react-native-toast-message';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [currentRoute, setCurrentRoute] = useState("Home");
  const [vectorColor, setVectorColor] = useState("#60FF46");
  const [wallInfo, setWallInfo] = useState();
  const [newVectors, setNewVectors] = useState([]);
  const [networkErrors, setNetworkErrors] = useState(null)
  const [problems, setSavedProblems] = useState([])

  const handleNetworkErrors = (error) => {
    setNetworkErrors(error.message);
  }

  const showToast = (name) => {
    Toast.show({
      position: 'bottom',
      text1: `Saved ${name}`,
    });
  }

  const showErrorToast = (error) => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: error || 'Error, please try later',
    });
  }

  const handleVectorColor = (color) => {
    switch (color) {
      case "#60FF46":
        setVectorColor("#16e8f7");
        break;
      case "#16e8f7":
        setVectorColor("#f72556");
        break;
      case "#f72556":
        setVectorColor("#60FF46");
        break;
    }
  };

  const handlePostProblem = async (problemName, grade) => {
    try {
      const newProblem = {
        "name": problemName,
        "vectors": newVectors,
        "wall": wallInfo.id,
        "grade": grade || 'V0'
      }
      console.log('BEFORE POST', newProblem)
      const post = await postProblem(newProblem, wallInfo.id);
      showToast(newProblem.name)
      const data = await getAllProblems(wallInfo.id);

      data.data.map(data => {
        console.log('After post problem', data.attributes)
        console.log('After post problem vector', data.attributes.vectors)
      })
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }));
      setSavedProblems(modifiedData);

    } catch (error) {
      handleNetworkErrors(error.message)
      showErrorToast(error.message)
    }
  } 

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <RouteContext.Provider
      value={{ currentRoute, setCurrentRoute, vectorColor, wallInfo, setWallInfo, newVectors, setNewVectors, networkErrors, handleNetworkErrors, problems, setSavedProblems }}
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
            <View style={styles.contentContainer}>
            </View>
            <View style={styles.menuContainer}>
              <MenuBar
                vectorColor={vectorColor}
                handleVectorColor={handleVectorColor}
                handlePostProblem={handlePostProblem}
              />
            </View>
          </SafeAreaView>
      
      </NavigationContainer>
      <Toast bottomOffset={76} />
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
