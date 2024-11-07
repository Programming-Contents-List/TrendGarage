import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#F5856C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    backgroundColor: '#5FBCCC',
    color: '#fff'
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EEEAE8'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4boff',
    color: '#12438',
    borderRadius: 6,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row"
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  },

  goalsContainer: {
    flex: 5
  }
});

export { styles };