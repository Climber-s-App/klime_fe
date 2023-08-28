import { View, Image, StyleSheet, Text } from 'react-native';
import { Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function MenuBar({vectorColor, handleVectorColor, currentScreen}) {

  const styles = StyleSheet.create({
    image: {
      width: 40,
      height: 40,
      alignSelf: 'center'
    },
    menuContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      // backgroundColor: 'red',
      flexDirection: 'row',
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // width: 370,
      // width: '100%',
      // borderRadius: 10,
      // marginBottom: 12,
      padding: 6,
    },
    vectorColor: { 
      borderWidth: 5,
      borderColor: `#${vectorColor}`,
      position: 'absolute',
      width:40,
      height:40,
      backgroundColor:'transparent',
      borderRadius:30,
      right: 4,
    }
  });

  const homeBar = (
    <View>
      <Image
        source={require('../assets/add-sign.png')}
        style={styles.image}
      />
      <Pressable onPress={() => handleVectorColor(vectorColor)} style={styles.vectorColor} />
    </View> 
  );

  const problemBar =  (
    <View>
      <Pressable>
        <MaterialIcons name='add' size={38} color='#25292e'/>
      </Pressable>
      <Pressable>
        <MaterialIcons name='save-alt' label='Save' size={24} color='#fff'/>
      </Pressable>
    </View>
  );
  
  return (
    <View style={styles.menuContainer}>
      { currentScreen === 'Home' ? homeBar
      : currentScreen === 'CreateProblem' ? problemBar 
      : <Text>Other Menu Bar To Be Implemented</Text>}
    </View>
  )
}

