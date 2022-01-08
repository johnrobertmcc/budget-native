import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalButtons, globalText} from '~/assets/globalStyles/globalStyles';
/**
 * Renders a resuable Button component.
 *
 * @param {object} props             The component as props.
 * @param {func}   props.callback    The function call to be executed.
 * @param {object} props.buttonStyle The style of the button.
 * @param {object} props.textStyle   The style of the text.
 * @param {string} props.text        The text to be displayed.
 * @returns {Element}                    Returns the Button component.
 */
export default function Button({callback, buttonStyle, textStyle, text}) {
  return (
    <TouchableOpacity onPress={callback} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  buttonStyle: globalButtons.button,
  textStyle: globalText.text,
  text: 'text here'
};
