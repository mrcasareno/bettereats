import { Text, Pressable, StyleSheet, View, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function MarketsScreen() {
    return (
        <View>
            <View style={styles.header} >

                <LinearGradient colors={['#54a86b', '#dff7e5']} >
                    <Text style={styles.headerText} >bettereats</Text>

                </LinearGradient >
                <StatusBar style="auto" />

            </View>
            <View>
                <Text> Market Page</Text>
            </View>
        </View>);
}
export default MarketsScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#cccccc',
        fontSize: 50,
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
});