import { Pressable, View, Text, StyleSheet } from "react-native";

const GoalItem = ({ text, onDeleteItem, deleteItemId }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(deleteItemId)}
        android_ripple={{ color: "#5e0acc" }} // 수정
        style={({ pressed }) => pressed && styles.pressedItem} // 수정
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
