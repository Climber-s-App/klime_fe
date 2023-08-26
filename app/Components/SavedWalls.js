import { StyleSheet, Text, View, Image } from 'react-native';

// this function would take in a prop and then it would look through and place images. I
// am just gonna keep the stock images for now and we can refactor for this later !! So there would only be one
// <Image/> and it would just be looping through and creating as many as the user has saved. But i'll just leave it 
// as two-permanent walls rn.

export default function SavedWalls() {
  return (
    <View style={{
      display: 'flex',
      marginTop: 20,
    }}>
      <Text style={{
        textAlign: 'center'
      }}>Saved Walls</Text>
      <View>
        <Image
          source={require('../assets/stockImages/climbingWall1.jpeg')}
          style={{
            marginTop: 30,
            width: 100,
            height: 100,
          }}
        />
      </View>
      <Image
        source={require('../assets/stockImages/climbingWall2.jpeg')}
        style={{
          marginTop: 30,
          width: 100,
          height: 100,
        }}
      />
    </View>
  )
}

