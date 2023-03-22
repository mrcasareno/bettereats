import { View, Text, Pressable, StyleSheet, Modal } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import React from 'react';
import MarketLandingPage from "./MarketLandingPage";

function Result(props){
    const mProps = props.market
    // const openHour = props.mOpen/100
    // const openMinute = props.mOpen%100
    // const closeHour = props.mOpen/100
    // const closeMinute = props.mOpen%100

    // const openAsMin = (openHour * 60) + openMinute
    // const closeAsMin = (closeHour * 60) + closeMinute
    // function pressHandler(props){
    //     props.navigation.navigate('MarketLandingPage', props)
    // }
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function startLandingPage(){
        setModalIsVisible(true);
        
      }
    
    function endLandingPage(){
        setModalIsVisible(false);
    }
    //{openAsMin/60 > 12 ? openAsMin/60 - 12 : openAsMin/60}

    //console.log(props.mName);
    return(
    <View>
        <Pressable 
        style={styles.pressContainer} 
        onPress={() => startLandingPage()}
        
        >
            <View style={styles.nameContainer}>        
                <Text style={styles.nameText}>{mProps.name}</Text>
            </View>
            <Text style={styles.detailsText}>{mProps.distance} miles away</Text>
            <View style={[mProps.is_open ? styles.openStatus: styles.closedStatus]}>        
                <Text style={styles.openText}>{mProps.is_open ? "OPEN": "CLOSED"}</Text>
            </View>
            <Text style={styles.detailsText}>Hours: {mProps.operating_hours}</Text>
            {/* //hours = ((hours + 11) % 12 + 1); */}
        </Pressable>

        <MarketLandingPage 
            visible={modalIsVisible} 
            onBack={endLandingPage}
            marketProps={mProps} />

        
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
        backgroundColor: '#cccccc',
        alignItems: 'center',
        
    },
    pressContainer:{
        borderRadius: 28,
        margin: 4,
        marginHorizontal: 15,
        height: 175,
        overflow: 'hidden',
        backgroundColor: '#cccccc',
        alignItems: 'center',
    }
    ,
    nameContainer:{
        height: 65,
    },

    closedStatus: {
        backgroundColor: '#FF5733',
        alignItems: 'center',
        height: 30,
        width: 80,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        borderRadius: 20,
        marginTop: 5,

    },
    openStatus: {
        backgroundColor: '#89F16B',
        alignItems: 'center',
        height: 30,
        width: 80,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        borderRadius: 20,
        marginTop: 5,
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
        marginTop: 10,
        marginLeft: 10,
        fontSize: '15',
        fontWeight: '500'
        
    },
    openText:{
        color: 'white',
        textAlign: 'center',
        marginTop: 3.5,
        fontSize: '17.5',
        
    },
    closedText:{
        color: 'white',
        textAlign: 'center',
        fontSize: '20',
        backgroundColor: 'red'  ,
        height: 25,
        width: 100
    }

});