import  Modal  from "react-native-modal";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState, useContext } from "react";
import RNPickerSelect from "react-native-picker-select";
import RouteContext from "./RouteContext";

const CreateProblemModal = ({isVisible, toggleCreateProblemModal, handlePostProblem}) => {
  const [problemName, setProblemName] = useState('');
  const [problemGrade, setProblemGrade] = useState('');
  const [nameError, setNameError] = useState("");
  const { setNewVectors } = useContext(RouteContext);
  const availableGrades = [
    { label: "V0", value: "V0" },
    { label: "V1", value: "V1" },
    { label: "V2", value: "V2" },
    { label: "V3", value: "V3" },
    { label: "V4", value: "V4" },
    { label: "V5", value: "V5" },
    { label: "V6", value: "V6" },
    { label: "V7", value: "V7" },
    { label: "V8", value: "V8" },
    { label: "V9", value: "V9" },
    { label: "V10", value: "V10" },
    { label: "V11", value: "V11" },
    { label: "V12", value: "V12" },
    { label: "V13", value: "V13" },
    { label: "V14", value: "V14" },
    { label: "V15", value: "V15" },
]

  const clearForm = () => {
    setProblemGrade('')
    setProblemName('')
    setNameError('');
  }

  const handleSave = () => {
    let isValid = true;

    if (problemName.trim() === "") {
      setNameError("PLEASE ENTER A NAME TO CONTINUE");
      isValid = false;
    } else {
      setNameError("");
    }

    if (isValid) {
      clearForm();
      setNewVectors([])
      toggleCreateProblemModal();
      handlePostProblem(problemName, problemGrade);
    }
  };

  return (
    <Modal isVisible={isVisible} style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>ENTER PROBLEM INFO</Text>
        <TextInput style={styles.input} placeholder={nameError || 'ENTER NAME'} onChangeText={setProblemName} value={problemName} />
        <RNPickerSelect
                placeholder={{ label: 'SELECT A GRADE: V0', value: 'V0' }}
                style={{ ...pickerSelectStyles }}
                onValueChange={(event) => setProblemGrade(event)}
                items={availableGrades}
             />
        <View style={styles.buttonContainer}>
          <Button color={'#2A6620'} title='SAVE' onPress={handleSave} />
          <Button 
              color={'#2A6620'} 
              title="CLOSE" 
              onPress={() => {
                toggleCreateProblemModal();
                clearForm();
          }} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#bbcfb8',
    padding: 10,
    width: '90%',
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
    gap: 23
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      paddingTop: 10,
      paddingHorizontal: 10,
      paddingBottom: 10,
      borderWidth: 1,
      borderColor: '#bbcfb8',
      borderRadius: 4,
      backgroundColor: 'white',
      color: 'black',
      width: '90%',
      alignSelf: 'center'
  },
}); 
