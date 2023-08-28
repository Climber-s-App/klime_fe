import { View, Image, StyleSheet } from 'react-native';

export default function MenuBar() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/add-sign.png')}
        style={styles.image}
      />
      <Pressable onPress={() => handleVectorColor(vectorColor)} style={styles.vectorColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    width: 370,
    borderRadius: 10,
    marginBottom: 12,
    padding: 6,
  }
});