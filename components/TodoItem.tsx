import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { colors } from '../constants/colors';
import useActions from '../hooks/useActions';
import { ITodoItemProps } from '../models/todoModel';
import { global } from '../styles/global';
import Checkbox from './Checkbox';

const TodoItem = ({ item }: ITodoItemProps) => {
  const { toggleTodoAction, deleteTodoAction } = useActions();

  const handleChange = () => {
    toggleTodoAction(item.id);
  };

  const handleDelete = () => {
    deleteTodoAction(item.id);
  };

  return (
    <Swipeable onSwipeableClose={() => handleDelete()}>
      <View style={[styles.item]}>
        <Checkbox value={item.complete} onChange={() => handleChange()} />
        <Text
          style={[global.text, styles.title, item.complete && styles.checked]}>
          {item.title}
        </Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.dark[5],
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    color: colors.gray[0],
    marginLeft: 8,
  },
  checked: { textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
});

export default TodoItem;
