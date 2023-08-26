import { StyleSheet, Text, View, Image } from 'react-native';
import SavedWalls from '../Components/SavedWalls'

export default function Home() {
  return (
    <View style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#d7dbdb',
      height: '100%',
      width: '100%',
    }}>
      <View style={{
        borderBottomColor: 'black',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        borderBottomWidth: 5,
      }}>
        <Image
          source={require('../assets/Klime.png')}
          style={{
            marginTop: 30,
            width: 200,
            height: 200,
          }}
        />
      </View>
      <View>
        <SavedWalls />
      </View>
    </View>

  )
}

