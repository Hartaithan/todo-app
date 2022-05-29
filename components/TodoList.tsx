import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import useTypedSelector from '../hooks/useTypedSelector';
import TodoItem from './TodoItem';
import { global } from '../styles/global';

const TodoList = () => {
  const { todos } = useTypedSelector(state => state.todo);

  return (
    <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={item => item.id.toString()}
        extraData={todos}
        ListEmptyComponent={
          <Text style={global.text}>Todos have not yet been added</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
});

export default TodoList;
