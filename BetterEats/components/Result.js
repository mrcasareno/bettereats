import { View, Text, Pressable, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import React from 'react';

function Result(props){
    
    //console.log(props.mName);
    return(
    <View style={styles.resultOuterContainer}>
        
        <Text style={styles.nameText}>{props.mName}</Text>
        <Text style={styles.detailsText}>{props.mHours}</Text>
       
    </View>);
}

export default Result;

const styles = StyleSheet.create({
    resultOuterContainer: {
        borderRadius: 28,
        margin: 4,
        marginHorizontal: 15,
        height: 175,
        overflow: 'hidden',
        backgroundColor: '#cccccc'
        
    },

    resultInner: {
        backgroundColor: '#cccccc',
        paddingVertical: 50,
        paddingHorizontal: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,

    },
    //circleSelect: {},
    nameText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginLeft: 10,
        fontSize: '20',
        fontWeight: 'bold'
    },

    detailsText:{
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginLeft: 10,
        fontSize: '15',
        
    }


});