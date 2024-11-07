import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { styles } from './styled';
import { useState } from 'react';

export default function App() {
  const [isVisible, setVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const startModalHandle = () => {
    setVisible(true);
  }

  const closeModalHandle = () => {
    setVisible(false);
  }

  const addGoalHandle = (enteredGoalText) => {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() } // 수정
    ]);
    closeModalHandle();
  }

  const deleteGoalHandle = (id) => { // 수정
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id); // 수정
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Text style={styles.textContainer}>Open up App.js to start working on your app! this is my first App</Text>
        <Text>test</Text>
        <Button title="Add New Goal" color="#a065ec" onPress={startModalHandle} />
        <GoalInput visible={isVisible} onAddGoal={addGoalHandle} close={closeModalHandle} />
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={({ item }) => {
            return (
              <GoalItem text={item.text} onDeleteItem={deleteGoalHandle} deleteItemId={item.id} /> // 수정
            )
          }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}
