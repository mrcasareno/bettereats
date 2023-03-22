import { Text, Pressable, StyleSheet, View, StatusBar, TextInput, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchMarkets } from "../utility/http"
import { getDistanceFromLatLonInMiles, rankMarkets } from "../utility/utilityfunctions";
import Result from "../components/Result";
import React, { useState, useEffect } from 'react';

function MarketsScreen({navigation}) {

    //handling search
    const [searchQuery, setSearchQuery] = useState('');
    const [distanceToggle, setDistanceToggle] = useState('Within 5 Miles')
    const handleSearch = (text) => {
        //searchQuery contains the text for search

        // console.log('Performing search for: ' + searchQuery);
        // console.log(fetchedMarkets[0]);
        // console.log(preferences);
    };
    const [toggleOpenDropdown, setToggleDropdown] = useState(false);
    const toggleDropdown = () => {
        setToggleDropdown(!toggleOpenDropdown);
    }
    //handling dropdown menu
    const mileMenu =
        [
            { label: 'Within 5 miles', value: "5" },
            { label: 'Within 10 miles', value: "10" },
            { label: 'Within 20 miles', value: "20" },
            { label: 'Within 30 miles', value: "30" },
            { label: 'Within 50 miles', value: "50" },
        ]


    const [mileValue, setMileValue] = useState("5");


    async function distanceHandler(itemvalue) {
        
        setMileValue(itemvalue);
        AsyncStorage.setItem("distance", itemvalue);

        const values = await AsyncStorage.getAllKeys()
        //console.log(values)
        const value = await AsyncStorage.getItem("distance");
        console.log("Fuck")
        //console.log(value["distance"])
        console.log("Shit")
        setDistanceToggle('Within ' + itemvalue + ' miles');
        setToggleDropdown(false);

    }



    const [fetchedMarkets, setFetchedMarkets] = useState([]);
    const [preferences, setPreferences] = useState([]);
        
    // soon as this screen is opened all of the data on markets
    // as well as user preferences is grabbed and stored into arrays.
    useEffect(() => {
        async function getMarkets() {
            const markets = await fetchMarkets();
            const date = new Date();

            const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            const curr_day = weekday[date.getDay()];
            const curr_time = date.getUTCHours() * 100 + date.getUTCMinutes();
            //console.log(curr_time, curr_day);
            try {
                const allKeys = await AsyncStorage.getAllKeys();
                const items = await AsyncStorage.multiGet(allKeys);
                const prefs = items.reduce((obj, [key, value]) => {
                    if (value === "true") {
                        obj[key] = true;
                    }
                    else if (value === "false") {
                        obj[key] = false;
                    }
                    else {
                        obj[key] = parseFloat(value);
                    }
                    return obj;
                }, {});
                setPreferences(prefs);

                for (const market of markets) {

                    // checking if the market is open:
                    if (market["open"] <= curr_time && curr_time <= market["close"]
                        && market["open_days"][curr_day] === 1) {
                        market["is_open"] = 1;
                    }
                    else {
                        market["is_open"] = 0;
                    }

                    // calculating current distance from user
                    const distance = getDistanceFromLatLonInMiles(
                        market["y"], market["x"],
                        prefs["y_cord"], prefs["x_cord"]
                    );
                    // console.log(distance, market.name);
                    // console.log(market.y, market.x);
                    market["distance"] = distance.toFixed(1);
                    if (isNaN(distance)) {
                        // console.log("FAILED: ", market.y, market.x, "ID: ", market.id);
                    }
                }
                //console.log(prefs);
                rankMarkets(markets, preferences);
            } catch (error) {
                console.log(error, "wuh oh");
            }

            setFetchedMarkets(markets);
            
            
        }

        getMarkets();
    }, []);


    const [radius, setRadius] = useState(0);
    const value = AsyncStorage.getItem("distance");
    if (value === '5'){setRadius(5);}
    if (value === '10'){setRadius(10);}
    if (value === '20'){setRadius(20);}
    if (value === '30'){setRadius(30);}
    if (value === '50'){setRadius(50);}
    //console.log(value["distance"]);

    // for (const fm of fetchedMarkets){
    //     console.log(+fm["distance"]);
    //     console.log(radius);
    // }
    const filteredMarkets = fetchedMarkets.filter((a) => +a.distance <= +mileValue);
    filteredMarkets.sort((a,b) => b.score - a.score)
    // console.log(filteredMarkets.length)
    // console.log(fetchedMarkets.length)

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
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.distanceText}>
                    Farmers Markets:
                </Text>
                <View >
                    <TouchableOpacity onPress={toggleDropdown} style={styles.dropDowntoggle} >
                        <Text style={{ alignSelf: 'center', paddingTop: 3, fontSize: 20 }}>{distanceToggle} &#8595;</Text>
                    </TouchableOpacity>
                    {toggleOpenDropdown && (
                        <Picker
                            style={{ marginTop: -15 }}
                            selectedValue={mileValue}
                            mode="dropdown"
                            onValueChange={(itemValue) => distanceHandler(itemValue)}>
                            {mileMenu.map((item, index) => (
                                <Picker.Item
                                    key={index}
                                    label={item.label}
                                    value={item.value}
                                />
                            ))
                            }

                        </Picker>
                    )}
                </View>

            </View>
            {/* adding view for flatlist */}
            <View>
                <FlatList  
                    contentContainerStyle={{ paddingBottom: 450 }}
                    data={filteredMarkets}
                    renderItem={(itemData) => {
                        return <Result 
                                    // mName={itemData.item.name} 
                                    // mDist={itemData.item.distance}
                                    // mHours={itemData.item.operating_hours}
                                    // mDays={itemData.item.open_days}
                                    // mStatus={itemData.item.is_open}
                                    // mAddy={itemData.item.address}
                                    market={itemData.item}

                                />;}}
                    alwaysBounceVertical={false}
                />
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
        borderLeftWidth: 10,
        borderRightWidth: 10,
        fontWeight: '500',

    },
    dropDowntoggle: {
        borderColor: "blue",
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#DDDDDD',
        width: 200,
        height: 30,
        borderRadius: 5

    }
});