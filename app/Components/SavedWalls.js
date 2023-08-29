import { Text, View, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SavedWalls({ savedWalls }) {

  const userWalls = savedWalls.map((wall) => {
    const { id, title, photo_url } = wall;
    const navigation = useNavigation();

    return (
      <Pressable onPress={() => navigation.navigate('View All Problems', {
        id: id
      })}>
        <View style={styles.view} key={id} id={id}>
          <Image
            source={{ uri: photo_url }}
            style={styles.image}
          />
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    );
  })

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {userWalls}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    margin: 15,
    width: 250,
    height: 200,
    alignSelf: 'center',
  },
  view: {
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignSelf: 'center',
    margin: 18,
    width: '70%'
  },
  scrollViewContainer: {
    width: '100%',
  },
  text: {
    marginBottom: 10,
    alignSelf: 'center',
  },
});

