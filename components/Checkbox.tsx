import { StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { colors } from '../constants/colors';

interface ICheckboxProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
  boxType?: 'circle' | 'square' | undefined;
  checkboxStyle?: ViewStyle;
  disabled?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = props => {
  const {
    value,
    onChange,
    boxType = 'circle',
    checkboxStyle,
    disabled = false,
  } = props;
  return (
    <CheckBox
      value={value}
      disabled={disabled}
      onValueChange={newValue => {
        onChange(newValue);
      }}
      tintColors={{
        true: colors.gray[0],
        false: colors.gray[6],
      }}
      tintColor={colors.gray[0]}
      onFillColor={colors.gray[0]}
      onCheckColor={colors.dark[9]}
      onTintColor="transparent"
      boxType={boxType}
      style={{ ...styles.checkbox, ...checkboxStyle }}
    />
  );
};

const styles = StyleSheet.create({
  checkbox: {},
});

export default Checkbox;
