import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

/**
 * Component to allow the user to see upcoming expenses.
 *
 * @returns {Element} Returns the LookAhead component.
 */
export default function LookAhead() {
  return (
    <View style={styles.container}>
      <Text>This will be the Look ahead component</Text>
    </View>
  );
}
