import { StyleSheet, View, Image } from 'react-native';
import SavedWalls from '../Components/SavedWalls'
import MenuBar from '../Components/MenuBar'

export default function Home() {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Klime.png')}
          style={styles.image}
        />
      </View>
      <SavedWalls />
      <View>
        <MenuBar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop: 30,
    width: 200,
    height: 200,
  },
  imageContainer: {
    borderBottomColor: 'black',
    width: '90%',
    alignItems: 'center',
    borderBottomWidth: 5,
  },
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#d7dbdb',
    height: '100%',
    width: '100%',
  },
})

