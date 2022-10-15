import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
<StatusBar style='auto' />;
import ChatsScreen from './screens/ChatsScreen';
import ChatScreen from './screens/ChatScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      {/* <ChatsScreen /> */}
      <ChatScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 50, // temporary
  },
});
