import {View, Text, Modal} from 'react-native';
import styles from './styles';
import React, {useState} from 'react';
import Input from '~/components/helpers/Input';
import Button from '~/components/helpers/Button';
import {addReceipt} from '~/functions/database';
import {useAppContext} from '~/context/state';
import {globalButtons, globalText} from '~/assets/globalStyles/globalStyles';

/**
 * Component to add receipts to Firestore under designated collection.
 *
 * @param  props0
 * @param  props0.open
 * @param  props0.setOpen
 * @returns {Element} Returns the AddReceipt component.
 */
export default function AddReceipt({open, setOpen}) {
  const defaultReceipt = {
    date: null,
    amount: null,
    items: null,
    memo: null,
    category: null
  };
  const [receipt, setReceipt] = useState(defaultReceipt);
  const {uid} = useAppContext();

  /**
   */
  function handleSubmit() {
    if (
      receipt?.date &&
      receipt?.category &&
      receipt?.amount &&
      receipt?.items.length > 0
    ) {
      addReceipt(uid, receipt);
    } else {
      alert('Please enter all fields');
    }
  }
  return (
    <View style={styles.background}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text> Add a New Receipt </Text>
        <Button
          callback={() => setOpen(!open)}
          text="close"
          textStyle={globalText.text}
          buttonStyle={[
            globalButtons.button,
            globalButtons.buttonContainer,
            globalButtons.buttonOutline
          ]}
        />
        <Input
          placeholder={'Date'}
          value={receipt.data}
          callback={(text) =>
            setReceipt((prev) => {
              return {
                ...prev,
                date: text
              };
            })
          }
        />
        <Input
          placeholder={'Amount'}
          value={receipt.amount}
          callback={(text) =>
            setReceipt((prev) => {
              console.log('test');
              return {
                ...prev,
                amount: text
              };
            })
          }
        />
        <Input
          placeholder={'Items, seperate by comma'}
          value={receipt.items}
          callback={(text) =>
            setReceipt((prev) => {
              AddReceipt;
              return {
                ...prev,
                items: text
              };
            })
          }
        />
        <Input
          placeholder={'Category'}
          value={receipt.category}
          callback={(text) =>
            setReceipt((prev) => {
              return {
                ...prev,
                category: text
              };
            })
          }
        />
        <Input
          placeholder={'Memo (optional)'}
          value={receipt.memo}
          callback={(text) =>
            setReceipt((prev) => {
              return {
                ...prev,
                memo: text
              };
            })
          }
        />
        <Button
          callback={() => handleSubmit()}
          text="Enter Receipt"
          textStyle={globalText.text}
          buttonStyle={[
            globalButtons.button,
            globalButtons.buttonContainer,
            globalButtons.buttonOutline
          ]}
        />
        {/* <Button callback={() => testReceipt(receipt)} text="Check Data" /> */}
      </Modal>
    </View>
  );
}
