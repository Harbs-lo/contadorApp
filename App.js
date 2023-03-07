import { StyleSheet, View } from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
    <Counter min = '-2' max = '50'/>
    <Counter min = '0' max = '20'/>
    <Counter min = '-10' max = '2'/>
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
