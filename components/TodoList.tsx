import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useTypedSelector from '../hooks/useTypedSelector';
import TodoItem from './TodoItem';
import { global } from '../styles/global';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TodoList = () => {
  const { todos } = useTypedSelector(state => state.todo);

  return (
    <GestureHandlerRootView style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={item => item.id.toString()}
        extraData={todos}
        ListEmptyComponent={
          <Text style={[global.text]}>Todos have not yet been added</Text>
        }
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
