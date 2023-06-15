import { StyleSheet, Text, View } from 'react-native';

// Screens
import Login from './screens/Login';

export default function App() {
  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
