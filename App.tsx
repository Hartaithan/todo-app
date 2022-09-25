import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { colors } from './constants/colors';
import useActions from './hooks/useActions';
import { global } from './styles/global';

const App = () => {
  const { addTodoAction } = useActions();
  const [input, setInput] = React.useState<string>('');

  const handleSubmit = () => {
    addTodoAction(input);
    setInput('');
  };

  return (
    <GestureHandlerRootView style={global.container}>
      <SafeAreaView style={[global.container, styles.container]}>
        <StatusBar backgroundColor={colors.dark[9]} />
        <Header />
        <TodoList />
        <Input
          value={input}
          onChange={text => setInput(text)}
          handleSubmit={handleSubmit}
          placeholder="What do you need to do?"
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

export default App;
