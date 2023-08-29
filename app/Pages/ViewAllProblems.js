import { Text, StyleSheet, View, Pressable } from 'react-native';
import {getAllProblems} from '../Components/apiCalls'
import { useState, useEffect } from 'react';
import { useNavigation, useCallback } from '@react-navigation/native';

export default function ViewAllProblems({route}) {
  const [problems, setSavedProblems] = useState([])
  // const [newId, setNewId] = useState()
  // const { id } = route.params.id

// useEffect(() => {
//     setNewId(route.params.id)
//   }, [newId])

function getProblemsAll() {
  getAllProblems().then(
    data => {
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }))
      setSavedProblems(modifiedData)
    }
  )
}

  useEffect(() => {
    getProblemsAll()
    // (async () => {
    //   const data = await getAllProblems()
    //   console.log(data)
    //   const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }))
    //   setSavedProblems(modifiedData)
    // })();
  }, [])

  const userProblem = problems.map((problem) => {
    console.log(problem)
    const navigation = useNavigation();

    return (
      <Pressable onPress={() => navigation.navigate('View Problem', {
        //enter props for passing down
      })}>
        <View  key={problem.wall_id} id={problem.wall_id}>
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