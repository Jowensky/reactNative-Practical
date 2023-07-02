import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputeContainer}>
        <TextInput placeholder="Your course goal!" style={styles.textInput} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>List of Goals:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%'
  },
  button: {
    backgroundColor: '#1CB7BD',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
