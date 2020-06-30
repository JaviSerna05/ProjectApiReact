import * as React from 'react';
import { Button, View, Text } from 'react-native';
import signIn from './signIn';

function signUp({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to SignUp</Text>
        <Button
        title="Go to Register"
        onPress={() => navigation.navigate('signIn')}
      />
      </View>
    );
  }

  export default signUp;