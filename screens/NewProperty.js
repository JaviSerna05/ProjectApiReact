import React, {Component, useState} from 'react';
import { Button, View, Text, TextInput, StyleSheet, Alert } from 'react-native';

 function NewProperty() {
  const [ title, setTitle] = useState("");
  const [ type, setType] = useState("");
  const [ address, setAddress] = useState("");
  const [ rooms, setRoom] = useState("");
  const [ price, setPrice] = useState("");
  const [ area, setArea] = useState("");
  const createProperty = async () => {
      try{
        const response = await fetch('http://192.168.0.4:3000/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            type: type,
            address: address,
            rooms: rooms,
            price: price,
            area: area 
          })
        });
        const json = await response.json();
        Alert.alert("Property Create");
      }catch(error){
          console.log(error);
      }
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Create properties</Text>
        <TextInput placeholder="Enter Title" onChangeText={text=>setTitle(text)}/>
        <TextInput placeholder="Enter Type(House,Aparment,Building)" onChangeText={text=>setType(text)}/>
        <TextInput placeholder="Enter address " onChangeText={text=>setAddress(text)}/>
        <TextInput placeholder="Enter rooms" onChangeText={number=>setRoom(number)}/>
        <TextInput placeholder="Enter price" onChangeText={number=>setPrice(number)}/>
        <TextInput placeholder="Enter area"onChangeText={number=>setArea(number)}/>
        <Button title="Create property" onPress={createProperty}></Button>
      </View>
    );
  }

  export default NewProperty;