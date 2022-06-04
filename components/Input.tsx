import { StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { IInputProps } from '../models/InputModel';

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
      keyboardType={type}
      value={value}
      onChangeText={text => onChange(text)}
      onSubmitEditing={handleSubmit}
    />
  );
};

const styles = StyleSheet.create({});

export default Input;
