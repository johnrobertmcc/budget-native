import {KeyboardAvoidingView, View, Text} from 'react-native';
import {
  globalStyles,
  globalButtons,
  globalText
} from '~/assets/globalStyles/globalStyles';
import {styles} from './styles';
import React, {useState, useEffect} from 'react';
import {auth} from '~/firebase';
import {useNavigation} from '@react-navigation/core';
import Input from '~/components/helpers/Input';
import Button from '~/components/helpers/Button';
import {useAppContext} from '~/context/state';

/**
 * Renders the Login screen.
 *
 * @returns {Element} Returns the LogIn component.
 */
export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credentials, catchCredentials] = useState(true);
  const navigation = useNavigation();
  const {uid, setUid} = useAppContext();

  /**
   * Logs in the user with provided credentials if valid.
   */
  function handleLogin() {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(() => catchCredentials(false));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        catchCredentials(true);
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  console.log('login uid', uid);
  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <Text style={styles.title}> Log In</Text>
      <View style={globalStyles.inputContainer}>
        <Input
          placeholder={'Email'}
          value={email}
          callback={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secure
          callback={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={globalButtons.buttonContainer}>
        <Button
          textStyle={credentials ? globalText.text : globalText.fixErrors}
          text={'Login'}
          buttonStyle={
            credentials
              ? [globalButtons.button, globalButtons.buttonOutline]
              : [globalButtons.disabled, globalButtons.disabledOutline]
          }
          callback={() => handleLogin()}
        />
        <Button
          callback={() => navigation.replace('Sign Up')}
          textStyle={styles.text}
          text={'No Account?'}
          buttonStyle={null}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
