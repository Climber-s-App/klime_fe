import  Modal  from "react-native-modal";
import { Text, View, StyleSheet, Button } from "react-native";

const InfoModal = ({isVisible, handleInfoModal, addIcon}) => {

  return (
    <Modal isVisible={isVisible} style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>KLIME INFO</Text>
        <Text style={styles.text}>Select your wall and navigate to a specific wall's problems</Text>
        <View style={styles.vectorContainer}>
          <Text style={styles.text}>Click the color circle to toggle between colors:</Text>
          <View style={styles.iconContainer}>
            <View style={styles.vectorColor} />
            <Text style={[styles.text, {marginLeft: 10}]}>Green signifies a start hold</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={[styles.vectorColor, { borderColor: '#16e8f7' }]} />
            <Text style={[styles.text, {marginLeft: 10}]}>Blue holds are in</Text>
        </View>
          <View style={styles.iconContainer}>
            <View style={[styles.vectorColor, { borderColor: '#f72556' }]} />
            <Text style={[styles.text, {marginLeft: 10}]}>Red signifies a finish hold</Text>
          </View>
          <View style={[styles.iconContainer, {marginBottom: 20, right: 3}]}>
            {addIcon}
            <Text style={[styles.text, {marginLeft: 10}]}>Push to add and save a new problem</Text>
          </View>
        </View>
        <Button color={'#2A6620'} title="CLOSE" onPress={handleInfoModal} />
      </View>
    </Modal>
  )
}

export default InfoModal;

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
