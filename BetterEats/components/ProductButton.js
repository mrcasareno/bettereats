import { View, Text, Pressable, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import savePreference from "../utility/utilityfunctions"
import { useState } from 'react';

function ProductButton(props) {
    function pressHandler(itemname) {
        console.log(itemname)
        // savePreference(itemname, true)
        //console.log(getPreference(itemname))
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={() => pressHandler(props.children)}
                style={({ pressed }) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>

    );
}

export default ProductButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        marginHorizontal: 20,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#cccccc',
        paddingVertical: 8,
        paddingHorizontal: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
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