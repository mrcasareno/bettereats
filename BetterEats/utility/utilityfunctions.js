import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePreference = async (key, value) => {
    try {
        // console.log(key);
        await AsyncStorage.setItem(key, value);

    } catch (error) {
        console.log(error);
    }
};

export const getPreference = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        console.log(error);
    }
};

export function getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2) {
    const earthRadiusMiles = 3959; // Earth's radius in miles
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInMiles = earthRadiusMiles * c;
    return distanceInMiles;
}

function deg2rad(degrees) {
    return degrees * (Math.PI / 180);
}

export function rankMarkets(marketArray, preferences) {
    for (let i = 0; i < marketArray.length; i++) {
        calculateMarketScore(marketArray[i], preferences);
    }
    // sort by descending score
    marketArray.sort((a, b) => b.score - a.score)
}

function calculateMarketScore(market, preferences) {
    let score = 0;
    // this is terrible but WCYD :)
    // console.log("from helper function: ", preferences)
    if (preferences["Fruits"] == true && market["fruit"] == 1) {
        score += 1;
    }
    if (preferences["Vegetables"] == true && market["vegetables"] == 1) {
        score += 1;
    }
    if (preferences["Pet Food"] == true && market["pet_food"] == 1) {
        score += 1;
    }
    if (preferences["Baked Goods"] == true && market["baked_goods"] == 1) {
        score += 1;
    }
    if (preferences["Body Care"] == true && market["body_care"] == 1) {
        score += 1;
    }
    if (preferences["Juices"] == true && market["juices"] == 1) {
        score += 1;
    }
    if (preferences["Dairy"] == true && market["dairy"] == 1) {
        score += 1;
    }
    if (preferences["Crafts"] == true && market["crafts"] == 1) {
        score += 1;
    }
    if (preferences["Plants"] == true && market["plants"] == 1) {
        score += 1;
    }
    if (preferences["Seafood"] == true && market["seafood"] == 1) {
        score += 1;
    }
    if (preferences["Eggs"] == true && market["eggs"] == 1) {
        score += 1;
    }
    if (preferences["Herbs"] == true && market["herbs"] == 1) {
        score += 1;
    }
    if (preferences["Cash"] === true && market["cash"] == 1) {
        score += 1;
    }
    if (preferences["Card"] === true && market["card"] == 1) {
        score += 1;
    }
    if (preferences["EBT"] === true && market["ebt"] == 1) {
        score += 1;
    }
    if (preferences["Mobile"] === true && market["mobile"] == 1) {
        score += 1;
    }
    if (preferences["Checks"] === true && market["checks"] == 1) {
        score += 1;
    }
    if (market["is_open"] === 1) {
        score += 3;
    }

    market["score"] = score;
}

export default savePreference;