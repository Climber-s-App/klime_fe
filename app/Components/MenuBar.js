import { View, Image, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function MenuBar({ vectorColor, handleVectorColor }) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    image: {
      width: 40,
      height: 40,
      alignSelf: 'center'
    },
    menuContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 6,
    },
    vectorColor: {
      borderWidth: 5,
      borderColor: `#${vectorColor}`,
      position: 'absolute',
      width: 40,
      height: 40,
      backgroundColor: 'transparent',
      borderRadius: 30,
      right: 4,
    }
  });

  return (
    <View style={styles.menuContainer}>
      <Pressable onPress={() => navigation.navigate('Create Problem', {
        vectorColors: vectorColor
      })}>
        <Image
          source={require('../assets/add-sign.png')}
          style={styles.image}
        />
      </Pressable >
      <Pressable onPress={() => handleVectorColor(vectorColor)} style={styles.vectorColor} />
    </View >
  )
}

