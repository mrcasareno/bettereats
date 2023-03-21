import { Text, Pressable, StyleSheet, View, StatusBar } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import ProductButton from "../components/ProductButton";
import PaymentButton from "../components/PaymentButton";
import OkButton from "../components/OkButton";
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

function UserPreferences({ navigation }) {
    function nextPageClick() {
        navigation.navigate('MarketsScreen');
    }
    //getting device location
    const [location, setLocation] = useState();
    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log("Please grant location permissions");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            console.log(currentLocation);
            AsyncStorage.setItem("x_cord", currentLocation["coords"]["longitude"].toString())
            AsyncStorage.setItem("y_cord", currentLocation["coords"]["latitude"].toString())


        };
        getPermissions();
    }, []);
    return (
        <View>
            <View style={styles.header} >

                <LinearGradient colors={['#54a86b', '#dff7e5']}>
                    <Text style={styles.headerText} >bettereats</Text>
                </LinearGradient >
                <StatusBar style="auto" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Preferred Products:</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Fruits</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Vegetables</ProductButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Pet Food</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Baked Goods</ProductButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Body Care</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Juices</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Dairy</ProductButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Crafts</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Plants</ProductButton>
                </View>

            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Seafood</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Eggs</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Herbs</ProductButton>
                </View>

            </View>


            <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Preferred Payment:</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Cash</PaymentButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Card</PaymentButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PaymentButton>EBT</PaymentButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Mobile</PaymentButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Checks</PaymentButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <OkButton title={'OK'} onPress={nextPageClick} />
                </View>

            </View>
        </View >

    );
}

export default UserPreferences;

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#cccccc',
        padding: 0,

    },
    headerText: {
        color: 'black',
        fontSize: 50,
        textAlign: "center",
        marginTop: 30,
        fontWeight: '500',
        padding: 20

    },
    categoryText: {
        color: '#black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500'

    },
    textContainer: {
        marginTop: 20,
        marginHorizontal: 50,
        alignItems: 'center',
        marginBottom: 10
    },
    productsContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});