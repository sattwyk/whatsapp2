import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function InputBox() {
  return (
    <View style={styles.container}>
      <AntDesign name='plus' size={24} color='royalblue' />
      <TextInput style={styles.input} />
      <MaterialIcons style={styles.send} name='send' size={24} color='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
