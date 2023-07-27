import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Main from './src/Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020202',
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
