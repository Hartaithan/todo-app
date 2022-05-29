import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';
import { colors } from './constants/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.gray[0],
  },
});

export default App;
