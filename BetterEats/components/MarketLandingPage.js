import { Text, Pressable, StyleSheet, View, StatusBar, Modal, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import ProductButton from "./ProductButton";
import PaymentButton from "./PaymentButton";
import OkButton from "./OkButton";
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

function MarketLandingPage(props){

    const mProps = props.marketProps
    const [vegies, setVeggie] = useState(mProps.vegetables)
    const [fruits, setFruits] = useState(mProps.fruit)
    const [petFood, setPetFood] = useState(mProps.pet_food)
    const [bakeGoods, setBakedGoods] = useState(mProps.baked_goods)
    const [bodyCare, setBodyCare] = useState(mProps.body_care)
    const [juices, setJuices] = useState(mProps.juices)
    const [dairy, setDairy] = useState(mProps.dairy)
    const [crafts, setCrafts] = useState(mProps.crafts)
    const [plants, setPlants] = useState(mProps.plants)
    const [seafood, setSeafood] = useState(mProps.seafood)
    const [eggs, setEggs] = useState(mProps.eggs)
    const [herbs, setHerbs] = useState(mProps.herbs)
    const [cash, setCash] = useState(mProps.cash)
    const [card, setCard] = useState(mProps.card)
    const [ebt, setEbt] = useState(mProps.ebt)
    const [mobile, setMobile] = useState(mProps.mobile)
    const [checks, setChecks] = useState(mProps.checks)
    
    console.log(petFood)
    return(
        <Modal visible={props.visible} animationType="slide">
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{mProps.name}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.categoryText}>Address</Text>
                    <Text style={styles.infoText}>{mProps.address}</Text>
                    <Text style={styles.categoryText}>Hours of Operation</Text>
                    <Text style={styles.infoText}>{mProps.operating_hours}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.categoryText}>Products</Text>

                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer, fruits===1?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Fruits</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                    <View style={[styles.buttonOuterContainer,vegies?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Vegetables</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer, petFood ?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Pet Food</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,bakeGoods?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Baked Goods</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer, bodyCare ?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Body Care</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,juices?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Juices</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer, dairy ?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Dairy</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,crafts?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Crafts</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,plants?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Plants</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,seafood?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Seafood</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,eggs?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Eggs</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,herbs?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Herbs</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.categoryText}>Payment Methods</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,cash?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Cash</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,card?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Card</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,ebt?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Mobile</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,ebt?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>EBT</Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={[styles.buttonOuterContainer,checks?styles.buttonTrue:styles.buttonFalse]}>
                            <Text style={styles.buttonText}>Checks</Text>
                        </View>
                    </View>
                </View>


                <View >
                        <Button title="BACK" onPress={props.onBack}/>
                </View>
            </View>
            
        </Modal>
    );

}

export default MarketLandingPage;

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#F8C34E',
        padding: 0,

    },
    headerText: {
        color: 'black',
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,
        fontWeight: '500',
        padding: 20

    },
    categoryText: {
        color: '#black',
        fontSize: 23,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 5,
        marginBottom:5,

    },
    infoText: {
        color: '#black',
        fontSize: 17.5,
        textAlign: 'center',
        fontWeight: '400',
        marginTop: 5,
        marginBottom:5,
    },
    textContainer: {
        marginTop: 10,
        marginHorizontal: 50,
        alignItems: 'center',
        // marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
        
    },
    // buttonOuterContainer: {
    //     borderRadius: 28,
    //     height: 50,
    //     overflow: 'hidden'
    // },
    buttonFalse: {
        backgroundColor: '#cccccc',
        

    },
    buttonOuterContainer: {

        borderRadius: 28,
        margin: 4,
        height: 30,
        width: 100,
        marginHorizontal: 15,
        overflow: 'hidden',
        alignItems: 'center',
        alignContent: 'center',
        
    },
    buttonText: {
        marginTop: 5,
        color: 'black',
        textAlign: 'center',
        fontSize: '15'
    },
    buttonTrue: {
        opacity: 0.75,
        backgroundColor: '#73B561'
    }
});