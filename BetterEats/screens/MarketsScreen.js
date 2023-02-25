import { Text, Pressable, StyleSheet, View, StatusBar, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react';

function MarketsScreen() {
    //handling search
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
        //searchQuery contains the text for search
        console.log('Performing search for:' + searchQuery);
    };
    //handling dropdown menu
    const mileMenu =
        [
            { label: 'Within 5 miles', value: '5miles' },
            { label: 'Within 10 miles', value: '10miles' },
            { label: 'Within 20 miles', value: '20miles' },
            { label: 'Within 30 miles', value: '30miles' },
            { label: 'Within 50 miles', value: '50miles' },
        ]


    const [mileValue, setMileValue] = useState(mileMenu.value);

    return (
        <View>
            <View style={styles.header} >

                <LinearGradient colors={['#54a86b', '#dff7e5']} >
                    <Text style={styles.headerText} >bettereats</Text>

                </LinearGradient >
                <StatusBar style="auto" />

            </View>
            <View style={{
                paddingHorizontal: 30
            }} >
                <TextInput style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                    placeholder="Search..."
                />
            </View>
            <View>
                <Text style={styles.distanceText}>
                    Farmers Markets:
                </Text>
            </View>
            <View style={{ padding: 0 }} >

                <Picker
                    selectedValue={mileValue}
                    mode="dropdown"
                    onValueChange={(itemValue) => setMileValue({ itemValue })}>
                    {mileMenu.map((item, index) => (
                        <Picker.Item
                            key={index}
                            label={item.label}
                            value={item.value}
                        />
                    ))
                    }

                </Picker>

            </View>
        </View >);
}
export default MarketsScreen;

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
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,

    },
    distanceText: {
        color: 'green',
        fontSize: 20,
        textAlign: "center",

        fontWeight: '500',

    },
});