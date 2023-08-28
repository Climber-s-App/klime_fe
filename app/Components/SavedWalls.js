import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

// this function would take in a prop and then it would look through and place images. I
// am just gonna keep the stock images for now and we can refactor for this later !! So there would only be one
// <Image/> and it would just be looping through and creating as many as the user has saved. But i'll just leave it 
// as two-permanent walls rn.

export default function SavedWalls() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.view}>
        <Image
          source={require('../assets/stockImages/climbingWall1.jpeg')}
          style={styles.image}
        />
        <Text style={styles.text}>Gravity Center</Text>
      </View>
      <View style={styles.view}>
        <Image
          source={require('../assets/stockImages/climbingWall2.jpeg')}
          style={styles.image}
        />
        <Text style={styles.text}>Send Zone</Text>
      </View>
      <View style={styles.view}>
        <Image
          source={require('../assets/stockImages/climbingWall2.jpeg')}
          style={styles.image}
        />
        <Text style={styles.text}>Send Zone</Text>
      </View>
      <View style={styles.view}>
        <Image
          source={require('../assets/stockImages/climbingWall2.jpeg')}
          style={styles.image}
        />
        <Text style={styles.text}>Send Zone</Text>
      </View>
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

