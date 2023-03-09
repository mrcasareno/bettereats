import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from 'react';

function PaymentButton(props) {
    function pressHandler() {
        console.log('Pressed!')
    }

    return (<View style={styles.buttonOuterContainer}>
        <Pressable
            onPress={pressHandler}
            style={({ pressed }) => pressed
                ? [styles.buttonInnerContainer, styles.pressed]
                : styles.buttonInnerContainer}
        >
            <Text style={styles.buttonText}>{props.children}</Text>
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

    buttonInnerContainer: {
        backgroundColor: '#cccccc',
        paddingVertical: 50,
        paddingHorizontal: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,

    },
    circleSelect: {},
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: '15'
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: '#403f3f'
    }
});