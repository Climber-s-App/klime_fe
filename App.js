import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, SafeAreaView } from 'react-native';
import ViewProblem from './app/Pages/ViewProblem';
import CreateProblem from './app/Pages/CreateProblem';
import { } from 'react-native';
import Home from './app/Pages/Home';



export default function App() {
  const [savedWalls, setSavedWalls] = useState([]) // we can use this in the future when completing our fetch request
  const [vectorColor, setVectorColor] = useState('60FF46')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    vectorColor: { 
      borderWidth: 5,
      borderColor: `#${vectorColor}`,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      width:30,
      height:30,
      backgroundColor:'transparent',
      borderRadius:30,
    }
  });

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
    <SafeAreaView style={styles.container}>
      <Home />
      <ViewProblem />
      <CreateProblem vectorColor={vectorColor} />
      <StatusBar style="auto" />
      <Pressable onPress={() => handleVectorColor(vectorColor)} style={styles.vectorColor} />
    </SafeAreaView>
  );
}


