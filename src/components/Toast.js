import React, { memo } from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../assets/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80 + getStatusBarHeight(),
    width: '100%',
  },
  content: {
    fontWeight: '500',
  },
});

const Toast = ({ type = 'error', message, onDismiss }) => (
  <View style={styles.container}>
    <Snackbar
      visible={!!message}
      duration={2000}
      onDismiss={onDismiss}
      style={{
        backgroundColor: type === 'error' ? theme.colors.error : theme.colors.success,
      }}
    >
      <Text style={styles.content}>{message}</Text>
    </Snackbar>
  </View>
);

export default memo(Toast);
