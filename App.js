import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/pages/WelcomeScreen'
import MemberSign from './src/pages/MemberSign'
import MemberResult from './src/pages/MemberResult'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="MemberSignScreen" component={MemberSign} />
          <Stack.Screen name="MemberResultScreen" component={MemberResult} />
        </Stack.Navigator>
          {/*<StatusBar hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>*/}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
