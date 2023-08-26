import { View, Image, StyleSheet } from 'react-native';

export default function CreateNew() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/add-sign.png')}
        style={styles.image}
      />
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
    display: 'flex',
    alignItems: 'center',
    width: 370,
    borderRadius: 10,
    marginBottom: 12,
    padding: 6,
  }
});