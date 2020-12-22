import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  rowItem: {
    flex: 1,
  },
});
// "react-native-reanimated": "^1.13.0",

export const AnswerButton = (title, color) => {
  return (
    <View style={styles.rowItem}>
      <Button title={title} buttonStyle={{ backgroundColor: color }} />
    </View>
  );
};
