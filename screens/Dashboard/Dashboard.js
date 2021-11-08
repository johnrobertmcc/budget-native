import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyles, globalButtons, globalText} from '~/assets/globalStyles/globalStyles';
import React from 'react';
import {auth} from '~/firebase';
import {useNavigation} from '@react-navigation/core';

/**
 * The dashboard component.
 *
 * @returns {Element} The Dashboard screen.
 */
export default function Dashboard() {
  const navigation = useNavigation();

  /**
   * Signs the user out on request and navigates to Login screen.
   */
  function handleSignOut() {
    auth.signOut().then(navigation.replace('Login'));
  }

  return (
    <View style={globalStyles.container}>
      <Text>Email: {auth.currentUser?.email} </Text>
      <TouchableOpacity
        style={[globalButtons.button, globalButtons.buttonContainer, globalButtons.buttonOutline]}
        onPress={() => handleSignOut()}>
        <Text style={globalText.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
