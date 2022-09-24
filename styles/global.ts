import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from './fonts';

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark[9],
  },
  text: {
    fontStyle: 'normal',
    fontFamily: fonts[400],
    fontSize: 14,
    color: colors.gray[0],
  },
});
