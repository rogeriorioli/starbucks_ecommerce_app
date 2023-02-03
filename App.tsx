import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Routes from './src/Routes';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" style="auto" translucent />
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal : 30
  },
  text : {
      color : "#000",
      fontSize: 50
  }
});