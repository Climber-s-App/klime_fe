import  Modal  from "react-native-modal";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

const CreateProblemModal = ({isVisible, handleCreateProblemModal}) => {

  return (
    <Modal isVisible={isVisible} style={styles.container}>
      <View style={styles.modal}>
        <TextInput style={styles.title}>Name</TextInput>
        <View style={styles.buttonContainer}>
        <Button color={'#2A6620'} title="SAVE" onPress={handleCreateProblemModal} />
        <Button color={'#2A6620'} title="CLOSE" onPress={handleCreateProblemModal} />
        </View>
      </View>
    </Modal>
  )
}

export default CreateProblemModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    paddingTop: 10,
    fontSize: 16,
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
  buttonContainer: {
    flexDirection: 'row',
    gap: 6
  },
  modal: {
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
  vectorColor: {
    borderWidth: 5,
    borderColor: `#60FF46`,
    width: 35,
    height: 35,
    backgroundColor: 'transparent',
    borderRadius: 30,
    alignSelf: "left",
    marginTop: 6
  },  
  vectorContainer: {
    alignSelf: "left",
  },
  iconContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    flexDirection: 'row'
  },
});
