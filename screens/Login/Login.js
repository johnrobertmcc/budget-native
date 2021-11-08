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

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, catchCredentials] = useState(true);
  const navigation = useNavigation();

  function handleLogin() {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => catchCredentials(false));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        catchCredentials(true);
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <Text style={styles.title}> Log In</Text>
      <View style={globalStyles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={globalStyles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={globalStyles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={globalButtons.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={
            credentials
              ? [globalButtons.button, globalButtons.buttonOutline]
              : [globalButtons.disabled, globalButtons.disabledOutline]
          }
        >
          <Text style={credentials ? globalText.text : globalText.fixErrors}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("Sign Up")}>
          <Text style={styles.text}>No account?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
