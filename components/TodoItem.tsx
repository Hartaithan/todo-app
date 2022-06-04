import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import useActions from '../hooks/useActions';
import { ITodoItemProps } from '../models/todoModel';
import { global } from '../styles/global';

const TodoItem = ({ item }: ITodoItemProps) => {
  const { toggleTodoAction } = useActions();

  const handleChange = () => {
    toggleTodoAction(item.id);
  };

  return (
    <View style={styles.item}>
      <CheckBox value={item.complete} onValueChange={() => handleChange()} />
      <Text
        style={[global.text, styles.title, item.complete && styles.checked]}>
        {item.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.gray[40],
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    color: colors.gray[100],
    marginLeft: 8,
  },
  checked: { textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
});

export default TodoItem;
