import {Text, Pressable, StyleSheet, View} from "react-native";

function UserPreferences(){
    return (
        <View style={styles.header}>
            <Text style={styles.headerText} >bettereats</Text>
        </View>
    );
}

export default UserPreferences;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#cccccc',
        fontSize: 50,
        padding: 16,
        
        
    },
    headerText: {
        color: 'black',
        fontSize: 50,
        textAlign: "center",
        marginTop: 30
    },
    productsContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});