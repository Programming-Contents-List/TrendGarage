import { Modal, View, TextInput, Button, Image } from "react-native";
import { styles } from "../styled";
import { useState } from "react";

const GoalInput = ({ visible, onAddGoal, close }) => {
  const [isEnteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandle = (text) => {
    setEnteredGoalText(text);
  };

  const addGoalHandle = () => {
    onAddGoal(isEnteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/favicon.png")} style={styles.image} />
        <TextInput
          placeholder="Your Goal"
          style={styles.textInput}
          onChangeText={goalInputHandle} // 'onChange' -> 'onChangeText'로 수정
          value={isEnteredGoalText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cancel" color="#f31282" onPress={close} />
        </View>
        <View style={styles.button}>
          <Button title="Add Goal" color="#b180f0" onPress={addGoalHandle} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
