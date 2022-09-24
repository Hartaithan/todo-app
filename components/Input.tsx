import { StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { IInputProps } from '../models/InputModel';
import { colors } from '../constants/colors';

const Input: React.FC<IInputProps> = props => {
  const {
    placeholder,
    type = 'default',
    value,
    onChange,
    handleSubmit,
  } = props;

  return (
    <TextInput
      style={styles}
      placeholder={placeholder}
      placeholderTextColor={colors.gray[6]}
      keyboardType={type}
      value={value}
      onChangeText={text => onChange(text)}
      onSubmitEditing={handleSubmit}
      selectionColor={colors.gray[0]}
    />
  );
};

const styles = StyleSheet.create({});

export default Input;
