import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, {  Path } from 'react-native-svg';
import RouteContext from './RouteContext';
import { useContext, useState } from 'react';
import InfoModal from './InfoModal';
import CreateProblemModal from './CreateProblemModal';

export default function MenuBar({ vectorColor, handleVectorColor, handlePostProblem }) {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isCreateProblemModalVisible, setIsCreateProblemInfoModalVisible] = useState(false);
  const { currentRoute } = useContext(RouteContext);
  const navigation = useNavigation();

  const infoIcon = <Svg height="42" viewBox="0 -960 960 960" width="42">
                    <Path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                   </Svg>
  const addIcon = <Svg height="42" viewBox="0 -960 960 960" width="42">
                    <Path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                  </Svg>
  const saveIcon = <Svg height="42" viewBox="0 -960 960 960" width="42">
                    <Path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                  </Svg>

  const handleInfoModal = () => {
    setIsInfoModalVisible(prev => !prev)
  }

  const toggleCreateProblemModal = () => {
    setIsCreateProblemInfoModalVisible(prev => !prev);
  }
  
  const styles = StyleSheet.create({
    image: {
      width: 40,
      height: 40,
      alignSelf: 'center',
      justifyContent: 'center'
    },
    menuContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      padding: 6,
    },
    vectorColor: {
      borderWidth: 5,
      borderColor: `${vectorColor}`,
      position: 'absolute',
      width: 35,
      height: 35,
      backgroundColor: 'transparent',
      borderRadius: 30,
      right: 10,
    },
    infoStyle: {
      position: 'absolute',
      left: 10,
    }
  });
  
  return (
    <View testID='menu-bar' style={styles.menuContainer}>
      <CreateProblemModal 
        isVisible={isCreateProblemModalVisible} 
        toggleCreateProblemModal={toggleCreateProblemModal}
        handlePostProblem={handlePostProblem}
      />
      <Pressable testID='info-button' style={styles.infoStyle} onPress={handleInfoModal}>
        {infoIcon}
        <InfoModal isVisible={isInfoModalVisible} currentRoute={currentRoute} handleInfoModal={handleInfoModal} addIcon={addIcon} saveIcon={saveIcon} />
      </Pressable >
      {currentRoute === 'View All Problems' && 
        <Pressable testID='create-button' style={styles.image} onPress={() => {
          navigation.navigate('Create Problem', {
          vectorColor: vectorColor
        })}}>
          {addIcon}
        </Pressable >
      }
      {currentRoute === 'Create Problem' && 
        <Pressable testID='save-button' style={styles.image} onPress={toggleCreateProblemModal}>
          {saveIcon}
        </Pressable >
      }
      {currentRoute === 'Create Problem' && <Pressable testID='color-button' onPress={() => handleVectorColor(vectorColor)} style={styles.vectorColor} />}
    </View >
  )
}