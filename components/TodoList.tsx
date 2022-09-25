import React from 'react';
import { FlatList, Text } from 'react-native';
import useTypedSelector from '../hooks/useTypedSelector';
import TodoItem from './TodoItem';
import { global } from '../styles/global';

const TodoList = () => {
  const { todos } = useTypedSelector(state => state.todo);

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={item => item.id.toString()}
      extraData={todos}
      ListEmptyComponent={
        <Text style={[global.text]}>Todos have not yet been added</Text>
      }
    />
  );
};

export default TodoList;
