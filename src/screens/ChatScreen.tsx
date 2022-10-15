import { useEffect } from 'react';

import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import bg from './../assets/images/BG.png';
import Message from './../components/Message';
import messages from './../assets/data/messages.json';
import InputBox from './../components/InputBox';

export default function ChatScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    //@ts-ignore
    navigation.setOptions({ title: route.params?.name });
  }, [route.params]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={{ padding: 10 }}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
