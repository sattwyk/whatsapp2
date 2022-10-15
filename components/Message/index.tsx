import { View, Text } from 'react-native';
import { Message } from '../../types';
export default function Message({ message }: { message: Message }) {
  return (
    <View>
      <Text>{message.text}</Text>
    </View>
  );
}
