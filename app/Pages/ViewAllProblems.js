import { Text, StyleSheet, View, Pressable } from 'react-native';
import {getAllProblems} from '../Components/apiCalls'
import { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import RouteContext from '../Components/RouteContext';
import SavedWalls from '../Components/SavedWalls';

export default function ViewAllProblems({route}) {
  const [problems, setSavedProblems] = useState([])
  const { setCurrentRoute, setWallInfo } = useContext(RouteContext);
  const currentScreen = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setCurrentRoute(currentScreen.name);
    });

    return () => {
      unsubscribeFocus();
    };
  }, [navigation, currentScreen, setCurrentRoute]);

  useEffect(() => {
    (async () => {
      const data = await getAllProblems(route.params.id);
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }));
      setSavedProblems(modifiedData);
      setWallInfo(route.params);
    })()
  }, [])

  const handleProblemNavigation = (problem) => {
    navigation.navigate('View Problem', {
      id: problem.id,
      image: route.params.image,
      grade: problem.grade,
      name: problem.name,
      vectors: problem.vectors
    });
  }

  const userProblem = problems.map((problem) => {
    return (
      <Pressable key={problem.id} onPress={() => handleProblemNavigation(problem)}>
        <View style={styles.problemView} key={problem.wall_id} id={problem.wall_id}>
          <Text style={styles.routeInformation}>{problem.name}</Text>
          <Text style={styles.routeInformation}>{problem.grade}</Text>
        </View>
      </Pressable>
    );
  })

  return (
    <View>
      {userProblem}
    </View>
  )
}

const styles = StyleSheet.create({
  problemView: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "space-between",
    flexDirection: 'row',
    margin: 5,
    backgroundColor: "white",
    padding: 10
  },
  routeInformation: {
    fontSize: 25,
    textAlign: 'center', 
    margin: 10
  }
})