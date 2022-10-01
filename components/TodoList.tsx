import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useTypedSelector from '../hooks/useTypedSelector';
import TodoItem from './TodoItem';
import { global } from '../styles/global';
import Divider from './Divider';

const TodoList = () => {
  const { todos } = useTypedSelector(state => state.todo);
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={item => item.id.toString()}
      extraData={todos}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <Text style={[global.text]}>Todos have not yet been added</Text>
      }
      ItemSeparatorComponent={() => <Divider height={10} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 12,
  },
});

export default TodoList;
