import  Modal  from "react-native-modal";
import { useState } from 'react';
import { Text, View, StyleSheet, Button } from "react-native";

const InfoModal = ({isVisible, currentRoute, handleInfoModal}) => {
  const [CurrentInfo, setCurrentInfo] = useState()
 

  return (
    <Modal isVisible={isVisible} style={styles.container}>
      <View style={styles.modal}>
          <Text style={styles.text}>Select your choices to navigate to a specific wall's problems</Text>
          <Button title="CLOSE" onPress={handleInfoModal} />
        </View>
    </Modal>

  )
}

export default InfoModal;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
    // height:30,
  },
  text: {
    paddingTop: 10,
    // textAlign: "center",
    // fontSize: 16,
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  modal: {
    // height: "90%",
    width: '95%',
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    padding:10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
});
