import {TextInput} from 'react-native';
import React from 'react';
import {globalStyles} from '~/assets/globalStyles/globalStyles';
/**
 * Renders a resuable Input component.
 *
 * @param   {object}   props             The component as props.
 * @param   {bool}     props.secure      Declare whether text entry is secured or not.
 * @param   {string}   props.placeholder The placeholder for the input.
 * @param   {string}   props.value       The value of the input box.
 * @param   {function} props.callback    The function of the input.
 * @param   {object}   props.style       Optional styling.
 * @returns {Element}                    Returns the Input component.
 */
export default function Input({secure, placeholder, style, value, callback}) {
  // debugger;
  return (
    <TextInput
      secureTextEntry={secure}
      placeholder={placeholder}
      style={style}
      value={value}
      onChangeText={callback}
    />
  );
}

Input.defaultProps = {
  secure: false,
  placeholder: '',
  style: globalStyles.input
};
