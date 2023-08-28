import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import SavedWalls from '../Components/SavedWalls'

export default function Home({setCurrentScreen}) {
  setCurrentScreen('Home');
  
  return (
    <View style={styles.viewContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Klime.png')}
          style={styles.image}
        />
      </View>
      <SavedWalls />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    // margin: 5,
    width: 125,
    height: 125,
  },
  imageContainer: {
    borderBottomColor: 'black',
    // width: '100%',
    // alignItems: 'center',
    borderBottomWidth: 5,
    // marginBottom: 5
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d7dbdb',
    // height: '100%',
    // width: '100%',
    // marginBottom: 50,
  },
})

