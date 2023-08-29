import { Text, StyleSheet } from 'react-native';
import {getAllProblems} from '../Components/apiCalls'
import { useState, useEffect } from 'react';

export default function ViewAllProblems({route}) {
  const [problems, setSavedProblems] = useState([])
  const { id } = route.params

  useEffect(() => {
    (async () => {
      const data = await getAllProblems(id);
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }))
      setSavedProblems(modifiedData)
    })();
  }, [])

  return (
    <Text>Here are all wall specific problems</Text>
  )
}