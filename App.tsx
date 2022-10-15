import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, StyleSheet } from 'react-native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    paddingVertical: 50, // temporary
  },
});
