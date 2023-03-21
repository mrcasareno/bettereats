import { View, Text, Pressable, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import React from 'react';


function PaymentButton(props) {
    const [cash, setCash] = useState(false)
    const [card, setCard] = useState(false)
    const [ebt, setEbt] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [checks, setChecks] = useState(false)

    const [isPressed, setPressed] = useState(false);

    const getData = async () => {
        // AsyncStorage.clear();
        const values = await AsyncStorage.getAllKeys();
        values.forEach(value => {
            if (value[0] === 'Cash') {
                setCash(true);
            } else if (value[0] === 'Card') {
                setCard(true);

            } else if (value[0] === 'EBT') {
                setEbt(true);
            } else if (value[0] === 'Mobile') {
                setMobile(true);

            } else if (value[0] === 'Checks') {
                setChecks(true);

            }
        })
    };
    React.useEffect(() => { getData(); });
    async function pressHandler(itemname) {
        const values = await AsyncStorage.getAllKeys();
        // console.log(values)
        if (values.includes(itemname) === false) {
            await AsyncStorage.setItem(itemname, 'true');
            if (itemname === 'Cash') {
                setCash(true);
            } else if (itemname === 'Card') {
                setCard(true);
            } else if (itemname === 'EBT') {
                setEbt(true);
            } else if (itemname === 'Mobile') {
                setMobile(true);
            } else if (itemname === 'Checks') {
                setChecks(true);
            }
        }
        if (isPressed === true) {
            AsyncStorage.removeItem(itemname)
        }
        setPressed(!isPressed);
    }

    return (<View style={styles.buttonOuterContainer}>
        <Pressable
            onPress={() => pressHandler(props.children)}
            style={[
                styles.buttonUnpressed,
                isPressed ? styles.buttonPressed : styles.buttonUnpressed,
            ]}
        >
            <Text style={[styles.buttonText, isPressed ? styles.buttonTextPressed : styles.buttonTextUnpressed]}>{props.children}</Text>
        </Pressable>
    </View>);
}

export default PaymentButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {

        borderRadius: 28,
        margin: 4,
        marginHorizontal: 15,
        overflow: 'hidden'
    },

    buttonUnpressed: {
        backgroundColor: '#cccccc',
        paddingVertical: 50,
        paddingHorizontal: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,

    },
    //circleSelect: {},
    buttonTextUnpressed: {
        color: 'black',
        textAlign: 'center',
        fontSize: '15'
    },
    buttonTextPressed: {
        color: 'white',
        textAlign: 'center',
        fontSize: '15'
    },
    buttonPressed: {
        opacity: 0.75,
        backgroundColor: '#403f3f'
    }
});