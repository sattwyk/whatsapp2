import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './components/chatListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
