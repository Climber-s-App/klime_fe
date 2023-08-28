import { useState } from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';
import ViewProblem from './app/Pages/ViewProblem';
import CreateProblem from './app/Pages/CreateProblem';
import Home from './app/Pages/Home';
import MenuBar from './app/Components/MenuBar'

export default function App() {
  const [savedWalls, setSavedWalls] = useState([]) // we can use this in the future when completing our fetch request
  const [vectorColor, setVectorColor] = useState('60FF46')
  const [currentScreen, setCurrentScreen] = useState('Home');

  const handleVectorColor = (color) => {
    switch (color) {
      case '60FF46':
        setVectorColor('16e8f7');
        break;
      case '16e8f7':
        setVectorColor('f72556');
        break;
      case 'f72556':
        setVectorColor('60FF46');
        break;
    }
  };

  return (
   <SafeAreaView style={{ ...styles.container, ...styles.androidSafeArea }}> 
      <StatusBar/>
      <View style={styles.contentContainer}>
        {/* <Home setCurrentScreen={setCurrentScreen}/> */}
        {/* <ViewProblem setCurrentScreen={setCurrentScreen}/> */}
        <CreateProblem vectorColor={vectorColor} setCurrentScreen={setCurrentScreen}/> 
      </View>
      <View style={styles.menuContainer}>
        <MenuBar 
          vectorColor={vectorColor} 
          handleVectorColor={handleVectorColor} 
          currentScreen={currentScreen}
        />
      </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  }, 
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  menuContainer: {
    bottom: 0,
    width: '100%',
  }
});