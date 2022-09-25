import { KeyboardType, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';

interface IInputProps {
  value: string;
  onChange: (text: string) => void;
  handleSubmit: () => void;
  type?: KeyboardType;
  placeholder: string;
}

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
