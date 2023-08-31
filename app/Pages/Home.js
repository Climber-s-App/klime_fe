import { StyleSheet, View, Image } from 'react-native';
import SavedWalls from '../Components/SavedWalls';
import { getUserWalls } from '../Components/apiCalls';
import { useState, useEffect, useContext } from 'react';
import RouteContext from '../Components/RouteContext';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Home() {
  const [savedWalls, setSavedWalls] = useState([])
  const { setCurrentRoute } = useContext(RouteContext);
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
      const data = await getUserWalls();
      const modifiedData = data.data.map((data) => ({ id: data.id, ...data.attributes }))
      setSavedWalls(modifiedData)
 
    })();
  }, [])

  return (
    <View style={styles.viewContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Klime.png')}
          style={styles.image}
        />
      </View>
      <SavedWalls savedWalls={savedWalls}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    alignSelf: 'center'
  },
  imageContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 8
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#d7dbdb',
    width: '100%',
  },
})

