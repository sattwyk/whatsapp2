import { View, Text } from 'react-native';
import { message } from '../../types';
export default function Message({ message }: { message: message }) {
  return (
    <View>
      <Text>{message.text}</Text>
    </View>
  );
}
