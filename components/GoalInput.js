import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onAddGoal, onModalOpen, onModalClose }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={onModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              disabled={enteredGoalText === ""}
              title="Add goal"
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onModalClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "container",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: { width: 100, height: 100, margin: 20 },
  buttonContainer: { flexDirection: "row", marginTop: 16 },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "100%",
    padding: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
