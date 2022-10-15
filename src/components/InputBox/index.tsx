import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function InputBox() {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('Send a Message', newMessage);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name='plus' size={24} color='royalblue' />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        multiline
        style={styles.input}
      />
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name='send'
        size={24}
        color='white'
      />
    </SafeAreaView>
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
