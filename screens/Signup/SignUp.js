import {KeyboardAvoidingView, View, Text} from 'react-native';
import {
  globalStyles,
  globalButtons,
  globalText
} from '~/assets/globalStyles/globalStyles';
import {styles} from './styles';
import React, {useState, useEffect} from 'react';
import {auth} from '~/firebase';
import Button from '~/components/helpers/Button';
import {useNavigation} from '@react-navigation/core';
import Input from '~/components/helpers/Input';

/**
 * Renders the SignUp screen.
 *
 * @returns {Element} The SignUp component.
 */
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigation = useNavigation();

  /**
   * If the password and confirmation match, will create user in firebase database and redirect to Dashboard screen.
   */
  function handleSignUp() {
    if (confirm === password) {
      auth.createUserWithEmailAndPassword(email, password);
    }
  }

  /**
   * Confirms the password and the conmfirm password input boxes are matching.
   *
   * @returns {boolean} Returns whether password matches.
   */
  function confirmPassword() {
    if (confirm !== password) {
      return false;
    }

    return true;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={globalStyles.inputContainer}>
        <Input
          placeholder={'Email'}
          value={email}
          callback={(text) => setEmail(text)}
        />
        <Input
          secure={true}
          placeholder={'Password'}
          value={password}
          callback={(text) => setPassword(text)}
        />
        <Input
          secureTextEntry
          placeholder={'Confirm Password'}
          style={[
            globalStyles.input,
            !confirmPassword() && styles.wrongPassword
          ]}
          value={confirm}
          callback={(text) => setConfirm(text)}
        />
        {!confirmPassword() && (
          <Text style={styles.warning}> Passwords do not match</Text>
        )}
      </View>
      <View style={globalButtons.buttonContainer}>
        <Button
          callback={() => handleSignUp()}
          buttonStyle={
            confirmPassword()
              ? [globalButtons.button, globalButtons.buttonOutline]
              : [globalButtons.disabled, globalButtons.disabledOutline]
          }
          textStyle={confirmPassword() ? globalText.text : globalText.fixErrors}
          text={'Register'}
        />
        <Button
          callback={() => navigation.replace('Login')}
          textStyle={styles.text}
          text={'Already Registered?'}
          buttonStyle={null}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
