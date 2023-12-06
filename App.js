import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setIsModalOpen(true);
  };

  const endAddGoalHandler = () => {
    setIsModalOpen(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Date.now().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((courseGoals) =>
      courseGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {isModalOpen && (
        <GoalInput
          onAddGoal={addGoalHandler}
          onModalOpen={isModalOpen}
          onModalClose={endAddGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
