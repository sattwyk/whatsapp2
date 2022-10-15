import { Text, ImageBackground, StyleSheet } from 'react-native';
import bg from './../assets/images/BG.png!png';

export default function chatScreen() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <Text>chatScreen</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
