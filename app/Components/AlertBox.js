import { View, Modal, StyleSheet, Text, Button } from "react-native";

const AlertBox = ({
  alertVisible,
  setAlertVisible,
  deleteVector,
  targetId,
}) => {
  const handleDelete = () => {
    setTimeout(() => setAlertVisible(false), "500");
    deleteVector(targetId);
  };

  return (
    <Modal
      style={styles.modal}
      visible={alertVisible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.box}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Do you want to delete this circle?
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            color="#2A6620"
            title="DELETE"
            onPress={() => handleDelete()}
          />
          <Button
            color="#2A6620"
            title="CANCLE"
            onPress={() => setAlertVisible(false)}
          />
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
    marginTop: 300,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 40,
    marginTop: 20,
  },
});

export default AlertBox;
