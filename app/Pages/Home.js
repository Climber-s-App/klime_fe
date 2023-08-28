import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import SavedWalls from '../Components/SavedWalls'
import MenuBar from '../Components/MenuBar'

export default function Home() {
  return (
    <SafeAreaView style={styles.viewContainer}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    margin: 10,
    width: 125,
    height: 125,
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

