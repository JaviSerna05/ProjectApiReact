// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home'
import listProperties from './screens/list-properties/ListProperties';
import signIn from './screens/signIn';
import signUp from './screens/signUp';
import menuUser from './screens/menuUser';
import userListProperties from './screens/userListProperties';
import NewProperty from './screens/NewProperty';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="listProperties" component={listProperties} />
        <Stack.Screen name="signIn" component={signIn} />
        <Stack.Screen name="signUp" component={signUp} />
        <Stack.Screen name="menuUser" component={menuUser} />
        <Stack.Screen name="NewProperty" component={NewProperty} />
        <Stack.Screen name="userListProperties" component={userListProperties} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
