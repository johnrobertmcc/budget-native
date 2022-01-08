import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
/**
 * Component to render the user's primary financial standings.
 *
 * @returns {Element} Returns the OverView component.
 */
export default function Overview() {
  return (
    <View style={styles.container}>
      <Text>This will be the overview component</Text>
    </View>
  );
}
