import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from './colors';

function AppButton({title, onPress, color= "secondary"}) {
    return (
        
        <TouchableOpacity  style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}> 

            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 5
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold"
    },
   
})
export default AppButton;