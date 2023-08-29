import { Text, StyleSheet } from 'react-native';
import {getAllProblems} from '../Components/apiCalls'

export default function ViewAllProblems({route}) {
  const { id } = route.params

  useEffect(() => {
    (async () => {
      const data = await getAllProblems(id);
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }))
      setSavedWalls(modifiedData)
    })();
  }, [])

  return (
    <Text>Here are all wall specific problems</Text>
  )
}