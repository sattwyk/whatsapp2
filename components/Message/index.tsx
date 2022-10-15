import { View, Text, StyleSheet } from 'react-native';
import { message } from '../../types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function Message({ message }: { message: message }) {
  const isMyMessage = message.user.id === 'u1';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage ? '#DCF8C5' : 'white',
          alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  message: {},
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
});
