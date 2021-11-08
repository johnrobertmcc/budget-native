import {
  TextInput,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  globalStyles,
  globalButtons,
  globalText,
} from "../../styles/globalStyles";
import { styles } from "./styles";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigation = useNavigation();

  function handleSignUp() {
    if (confirm === password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => console.log(error));
    }
  }

  function confirmPassword() {
    if (confirm !== password) {
      return false;
    }

    return true;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={globalStyles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={globalStyles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={[globalStyles.input]}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          style={[
            globalStyles.input,
            !confirmPassword() && styles.wrongPassword,
          ]}
          value={confirm}
          onChangeText={(text) => setConfirm(text)}
        />
        {!confirmPassword() && (
          <Text style={styles.warning}> Passwords don't match</Text>
        )}
      </View>
      <View style={globalButtons.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleSignUp()}
          style={
            confirmPassword()
              ? [globalButtons.button, globalButtons.buttonOutline]
              : [globalButtons.disabled, globalButtons.disabledOutline]
          }
        >
          <Text
            style={confirmPassword() ? globalText.text : globalText.fixErrors}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.text}>Already Registered?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
