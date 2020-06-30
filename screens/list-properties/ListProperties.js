import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardComponent from './card-component';

function ListProperties() {
  const [DATA, setData] = useState([]);
  const fetchProperties = async () => {
    try{
        let response = await fetch('http://192.168.0.4:3000/get');
        let jsonResponse = await response.json();
        setData(jsonResponse.properties)
        console.log(jsonResponse);
    }catch(error){
        console.log(error);
    }
  }
  useEffect(() => {
      fetchProperties();
  }, []);
  
    return(
        <View style={StyleSheet.container}>
            <FlatList
              data={DATA}
              renderItem={({item})=> <CardComponent/>}
              keyExtractor={item => item._id}
            >
         
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    }
});

export default ListProperties;