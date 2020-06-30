import * as React from 'react';
import { Button, View, Text } from 'react-native';

function signIn({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LogIn</Text>
        <Button
        title="Go to menu User"
        onPress={() => navigation.navigate('menuUser')}
        />
      </View>
    );
  }

  export default signIn;