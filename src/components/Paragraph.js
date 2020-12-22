import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../assets/theme';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
  },
});

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

export default memo(Paragraph);
