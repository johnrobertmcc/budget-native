import {View, Text, TouchableOpacity} from 'react-native';
import {
  globalStyles,
  globalButtons,
  globalText
} from '~/assets/globalStyles/globalStyles';
import React, {useState} from 'react';
import {auth} from '~/firebase';
import {useNavigation} from '@react-navigation/core';
import AddReceipt from '~/components/widgets/AddReceipt';
import {useAppContext} from '~/context/state';
import Button from '~/components/helpers/Button';
import Overview from '~/components/widgets/Overview';
import LookAhead from '~/components/widgets/LookAhead/LookAhead';
import {styles} from './styles';

/**
 * The dashboard component.
 *
 * @returns {Element} The Dashboard screen.
 */
export default function Dashboard() {
  const {uid, setUid} = useAppContext();
  const navigation = useNavigation();
  const [receipt, openReceipt] = useState(false);

  /**
   * Signs the user out on request and navigates to Login screen.
   */
  function handleSignOut() {
    setUid(null);
    auth.signOut().then(navigation.replace('Login'));
  }

  console.log('uid Dashboard', uid);
  return (
    <View style={globalStyles.dashboard}>
      {receipt && <AddReceipt open={receipt} setOpen={openReceipt} />}
      <View style={styles.containers}>
        <Overview />
        <LookAhead />
      </View>
      <View>
        <Button
          callback={() => handleSignOut()}
          text="Sign Out"
          textStyle={globalText.text}
          buttonStyle={[
            globalButtons.button,
            globalButtons.buttonContainer,
            globalButtons.buttonOutline
          ]}
        />
        <Button
          callback={() => openReceipt(!receipt)}
          text="Add +"
          textStyle={globalText.text}
          buttonStyle={[
            globalButtons.button,
            globalButtons.buttonContainer,
            globalButtons.buttonOutline
          ]}
        ></Button>
      </View>
    </View>
  );
}
