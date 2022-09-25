import { KeyboardType, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { global } from '../styles/global';

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
      style={global.text}
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

export default Input;
