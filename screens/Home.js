import * as React from 'react';
import { Button, View, Text, StyleSheet,Image } from 'react-native';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
            source={require('../img/casa.png')}
            style={styles.logo}
          />
        <Text style={styles.Title}>Home</Text>
        <Button
          title="Go to List Properties"
          onPress={() => navigation.navigate('listProperties')}
          style={styles.Button1}
        />
        <Button
          title="Go to SignIn"
          onPress={() => navigation.navigate('signIn')}
          style={styles.Button2}
        />
        <Button
          title="Go to SignUp"
          onPress={() => navigation.navigate('signUp')}
          style={styles.Button3}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    Title: {
      fontSize: 25,
      textShadowColor: '#ffffff',
      paddingBottom: 50,
      paddingLeft: 5
    },
    logo: {
      width: 100,
      height: 100,
      marginTop: 10,
      marginBottom: 40,
      marginLeft: 5
    },
     Button1:{
       paddingTop:10
     },
     Button2:{
      paddingBottom:10,
      paddingTop: 10 
    },
    Button3:{
      paddingBottom:10 
    }   
  });

  export default Home;