import { Text, StyleSheet, View, Pressable } from 'react-native';
import {getAllProblems} from '../Components/apiCalls'
import { useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import RouteContext from '../Components/RouteContext';
import Svg, {  Path } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

export default function ViewAllProblems({route}) {
  const { setCurrentRoute, setWallInfo, networkErrors, handleNetworkErrors, problems, setSavedProblems } = useContext(RouteContext);
  const currentScreen = useRoute();
  const navigation = useNavigation();
  const addIcon = 
    <Svg height="30" viewBox="0 -960 960 960" width="30">
      <Path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Svg>

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
      try {
        const data = await getAllProblems(route.params.id);
        const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }));
        setSavedProblems(modifiedData);
        setWallInfo(route.params);
      } catch (error) {
        handleNetworkErrors(error)
      }
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
      <Pressable testID='view-problems' key={problem.id} onPress={() => handleProblemNavigation(problem)}>
        <View testID='problem' style={styles.problemView} key={problem.wall_id} id={problem.wall_id}>
          <Text testID='problem-name' style={styles.routeInformation}>{problem.name}</Text>
          <Text testID='problem-grade' style={styles.routeInformation}>{problem.grade}</Text>
        </View>
      </Pressable>
    );
  })

  return (
    <View>
      {networkErrors ? 
        (<Text testID='problem-network-error' style={styles.routeInformation}>{networkErrors}</Text>)
      :    
        problems.length ? 
          (<ScrollView>
              {userProblem}
            </ScrollView>
          ) : 
          (<View style={styles.problemView}>
            <Text style={styles.routeInformation}>Press on the {addIcon} to save a problem</Text>
          </View>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  problemView: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: "white",
    justifyContent: 'space-between',
    padding: 10
  },
  routeInformation: {
    fontSize: 20,
    
  }
})