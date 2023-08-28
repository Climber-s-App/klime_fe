import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';
import ViewProblem from './app/Pages/ViewProblem';
import CreateProblem from './app/Pages/CreateProblem';
import Home from './app/Pages/Home';
import MenuBar from './app/Components/MenuBar';
import { getUserWalls } from './app/Components/apiCalls';

export default function App() {
  const [savedWalls, setSavedWalls] = useState([]) 
  const [vectorColor, setVectorColor] = useState('60FF46')

  useEffect(() => {
    (async () => {
      const data = await getUserWalls();
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes}))
      setSavedWalls(modifiedData)
    })();
  }, [])

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
  }

  return (
   <SafeAreaView style={{ ...styles.container, ...styles.androidSafeArea }}> 
      <StatusBar/>
      <View style={styles.contentContainer}>
        <Home savedWalls={savedWalls}/>
        {/* <ViewProblem /> */}
        {/* <CreateProblem vectorColor={vectorColor} />  */}
      </View>
      <View style={styles.menuContainer}>
        <MenuBar vectorColor={vectorColor} handleVectorColor={handleVectorColor} />
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