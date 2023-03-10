import { View, Text, Pressable, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { savePreference, getPreference } from "../utility/utilityfunctions"
import { useState } from 'react';
import React from 'react';

function ProductButton(props) {
    const [vegies, setVeggie] = useState(false)
    const [fruits, setFruits] = useState(false)
    const [petFood, setPetFood] = useState(false)
    const [bakeGoods, setBakedGoods] = useState(false)
    const [bodyCare, setBodyCare] = useState(false)
    const [juices, setJuices] = useState(false)
    const [dairy, setDairy] = useState(false)
    const [crafts, setCrafts] = useState(false)
    const [plants, setPlants] = useState(false)
    const [seafood, setSeafood] = useState(false)
    const [eggs, setEggs] = useState(false)
    const [herbs, setHerbs] = useState(false)






    const getData = async () => {
        //Multiget
        const values = await AsyncStorage.getAllKeys();
        values.forEach(value => {
            if (value[0] == 'Vegetables') {

                setVeggie(true);
            } else if (value[0] === 'Pet Food') {
                setPetFood(true);

            } else if (value[0] === 'BakedGoods') {
                setBakedGoods(true);

            } else if (value[0] === 'Body Care') {
                setBodyCare(true);

            } else if (value[0] === 'Juices') {
                setJuices(true);

            } else if (value[0] === 'Dairy') {
                setDairy(true);

            } else if (value[0] === 'Crafts') {
                setCrafts(true);

            } else if (value[0] === 'Plants') {
                setPlants(true);

            } else if (value[0] === 'Seafood') {
                setSeafood(true);

            } else if (value[0] === 'Eggs') {
                setEggs(true);

            } else if (value[0] === 'Herbs') {
                setHerbs(true);

            }
        });
        // const values = await AsyncStorage.multiGet(['@count', '@greeting']);

        // values.forEach(value => {
        //     if (value[0] === '@count') {
        //         const count = parseInt(value[1]);
        //         setCounter(isNaN(count) ? 0 : count);
        //     } else if (value[0] === '@greeting') {
        //         setGreetingInfo(JSON.parse(value[1]));
        //     }
        // });

    };
    React.useEffect(() => { getData(); });
    async function pressHandler(itemname) {
        //await AsyncStorage.setItem(itemname, 'true');
        //await AsyncStorage.clear();
        const values = await AsyncStorage.getAllKeys();
        console.log(values)

        if (values.includes(itemname) === false) {
            await AsyncStorage.setItem(itemname, 'true');
            if (itemname === 'Fruits') {
                setFruits(true);


            } else if (itemname === 'Vegetables') {
                setVeggie(true);

            } else if (itemname === 'Pet Food') {
                setPetFood(true);

            } else if (itemname === 'BakedGoods') {
                setBakedGoods(true);

            } else if (itemname === 'Body Care') {
                setBodyCare(true);

            } else if (itemname === 'Juices') {
                setJuices(true);

            } else if (itemname === 'Dairy') {
                setDairy(true);

            } else if (itemname === 'Crafts') {
                setCrafts(true);

            } else if (itemname === 'Plants') {
                setPlants(true);

            } else if (itemname === 'Seafood') {
                setSeafood(true);

            } else if (itemname === 'Eggs') {
                setEggs(true);

            } else if (itemname === 'Herbs') {
                setHerbs(true);

            }
        }

    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={() => pressHandler(props.children)}
                on
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