import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { globalStyles as styles } from "../../styles/globalStyles";
import React from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";

export default function Dashboard() {
  const navigation = useNavigation();
  function handleSignOut() {
    auth.signOut().then(navigation.replace("Login"));
  }
  return (
    <View style={globalStyles.container}>
      <Text>Email: {auth.currentUser?.email} </Text>
      <TouchableOpacity style={styles.button} onPress={() => handleSignOut()}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
