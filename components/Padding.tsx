import { StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface IPaddingProps {
  padding: number;
}

const Padding: React.FC<PropsWithChildren<IPaddingProps>> = ({
  children,
  padding,
}) => {
  return (
    <View style={{ ...styles.container, paddingHorizontal: padding }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});

export default Padding;
