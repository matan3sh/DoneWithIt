import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import colors from '../config/colors';

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      ios: { fontSize: 20, fontFamily: 'Avenir' },
      android: { fontSize: 18, fontFamily: 'Roboto' },
    }),
  },
});
