import { KeyboardType } from 'react-native';

export interface IInputProps {
  value: string;
  onChange: (text: string) => void;
  handleSubmit: () => void;
  type?: KeyboardType;
  placeholder: string;
}
