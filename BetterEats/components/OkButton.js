import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from 'react';

function OkButton({ title, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}

            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>

    );
}
export default OkButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        marginHorizontal: 20,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#54a86b',
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