import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewProblem from './app/Pages/ViewProblem';
import CreateProblem from './app/Pages/CreateProblem';
import { SafeAreaView } from 'react-native';


export default function App() {
  const [savedWalls, setSavedWalls] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <ViewProblem /> */}
      <CreateProblem />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
