import * as React from 'react';
import { Button, View, Text } from 'react-native';

function menuUser({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Menu User</Text>
        <Button
        title="Go to List User Properties"
        onPress={() => navigation.navigate('userListProperties')}
      />
      <Button
        title="Go to Create Properties"
        onPress={() => navigation.navigate('NewProperty')}
      />
      </View>
    );
  }

  export default menuUser;