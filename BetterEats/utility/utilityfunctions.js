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

export default savePreference;