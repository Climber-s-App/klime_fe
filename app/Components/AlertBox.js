import { View, Pressable, Modal, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

const AlertBox = ({alertVisible}) => {
  
  return (
    <View>
      <Modal
        visible={alertVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable style={[Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop, styles.backdrop]} onPress={() => setModalVisible(false)} />
        <View>
        
        </View>
      </Modal>

      <View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.3
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.32
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

export default AlertBox;
