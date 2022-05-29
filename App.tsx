import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { colors } from './constants/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.gray[0]} />
      <Header />
      <TodoList />
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
