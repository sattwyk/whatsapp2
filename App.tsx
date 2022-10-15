import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, StyleSheet } from 'react-native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Navigator />
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
