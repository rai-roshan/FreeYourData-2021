import React from 'react';
import { StatusBar } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApproveScreen from './app/screens/ApproveScreen';
import InfoScreen from './app/screens/InfoScreen';
import FetchDataScreen from './app/screens/FetchDataScreen';
import TabNav from './app/screens/tabNav';

export default function App() { 

  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Info" component={InfoScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Approve" component={ApproveScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Fetch" component={FetchDataScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}