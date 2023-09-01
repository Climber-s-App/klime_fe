import { View, Pressable, Modal, StyleSheet, Text, Button } from "react-native";
import { useState } from "react";

const AlertBox = ({ alertVisible, setAlertVisible }) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={true}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.box}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Do you want to delete this circle?</Text>
        <View style={styles.buttonContainer}>
          <Button color='#2A6620' title="DELETE" />
          <Button color='#2A6620' title="CANCLE" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    marginLeft: "20%",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    marginTop: 300,
    backgroundColor: 'white',
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 40,
    marginTop: 20
  }
});

export default AlertBox;
