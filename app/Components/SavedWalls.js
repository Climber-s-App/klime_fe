import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

// this function would take in a prop and then it would look through and place images. I
// am just gonna keep the stock images for now and we can refactor for this later !! So there would only be one
// <Image/> and it would just be looping through and creating as many as the user has saved. But i'll just leave it 
// as two-permanent walls rn.

export default function SavedWalls({savedWalls}) {
  
  const userWalls = savedWalls.map((wall) => {
    const {id, title, photo_url} = wall;

    return (
      <View style={styles.view} key={id} id={id}>
        <Image
          source={{uri: {photo_url}}}
          style={styles.image}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
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
  },
  view: {
    backgroundColor: 'white',
    shadowColor: '#171717',
    margin: 10,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    margin: 18,
  },
  // scrollViewContainer: {
  //   display: 'flex',
  // },
  text : {
    marginBottom: 10
  },
});

