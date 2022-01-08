import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '~/screens/Dashboard';
import React from 'react';
import LogIn from '~/screens/Login';
import SignUp from '~/screens/Signup';
import {AppWrapper} from './context/state';
const Stack = createNativeStackNavigator();
/**
 * The entry file for the application.
 *
 * @returns {Element} The app itself.
 */
export default function App() {
  return (
    <AppWrapper>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="Home" component={Dashboard} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppWrapper>
  );
}
