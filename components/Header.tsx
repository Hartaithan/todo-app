import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { global } from '../styles/global';
import { colors } from '../constants/colors';

const Header = () => {
  const { todos } = useTypedSelector(state => state.todo);
  return (
    <View style={styles.header}>
      {todos.length === 0 && (
        <Text style={[global.text]}>Hello, u don't have any tasks 😒</Text>
      )}
      {todos.length > 0 && (
        <Text style={[global.text]}>Hello, u have {todos.length} tasks 🙂</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
});

export default Header;
