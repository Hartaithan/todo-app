import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { colors } from './constants/colors';
import useActions from './hooks/useActions';

const App = () => {
  const { addTodoAction } = useActions();
  const [input, setInput] = React.useState<string>('');

  const handleSubmit = () => {
    addTodoAction(input);
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.gray[0]} />
      <Header />
      <TodoList />
      <Input
        value={input}
        onChange={text => setInput(text)}
        handleSubmit={handleSubmit}
        placeholder="What do you need to do?"
      />
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
