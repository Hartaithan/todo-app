import { StyleSheet, View } from 'react-native';
import React from 'react';

interface IDividerProps {
  width?: number;
  height?: number;
  background?: string;
  marginVertical?: number;
  marginHorizontal?: number;
  flex?: boolean;
}

const Divider: React.FC<IDividerProps> = props => {
  const {
    width = '100%',
    height = '100%',
    background = 'transparent',
    marginVertical = 0,
    marginHorizontal = 0,
    flex = false,
  } = props;

  if (flex) {
    return <View style={styles.flex} />;
  }

  return (
    <View
      style={{
        ...styles.separator,
        width,
        height,
        backgroundColor: background,
        marginVertical,
        marginHorizontal,
      }}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: '100%',
  },
  flex: {
    flex: 1,
  },
});

export default Divider;
