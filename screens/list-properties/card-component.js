import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CardComponent() {
    return(
        <View style={StyleSheet.container}>
            <Text>List Properties</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default CardComponent;