import { Text, StyleSheet, View, Pressable } from 'react-native';
import {getAllProblems} from '../Components/apiCalls'
import { useState, useEffect } from 'react';
import { useNavigation, useCallback } from '@react-navigation/native';

export default function ViewAllProblems({route}) {
  const [problems, setSavedProblems] = useState([])
  // const [newId, setNewId] = useState()

// useEffect(() => {
//     setNewId(route.params.id)
//   }, [newId])

function getProblemsAll() {
  getAllProblems(route.params.id).then(
    data => {
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }))
      setSavedProblems(modifiedData)
    }
  )
}

  useEffect(() => {
    getProblemsAll()
  }, [])

  const userProblem = problems.map((problem) => {
    const navigation = useNavigation();

    return (
      <Pressable onPress={() => navigation.navigate('View Problem', {
        id: problem.id,
        image: route.params.image
      })}>
        <View styles={styles.problemView} key={problem.wall_id} id={problem.wall_id}>
          <Text>{problem.name}</Text>
          <Text>{problem.grade}</Text>
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
    flexDirection: 'row'
  },
})