import { Text, Pressable, StyleSheet, View, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ProductButton from "../components/ProductButton";
import PaymentButton from "../components/PaymentButton";
import OkButton from "../components/OkButton"
function UserPreferences({ navigation }) {
    function nextPageClick() {
        navigation.navigate('MarketsScreen');
    }
    return (
        <View>
            <View style={styles.header} >

                <LinearGradient colors={['#54a86b', '#dff7e5']}>
                    <Text style={styles.headerText} >bettereats</Text>
                </LinearGradient >
                <StatusBar style="auto" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Preferred Products:</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Fruits</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Vegetables</ProductButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Pet Food</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Baked Goods</ProductButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Body Care</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Juices</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Bread</ProductButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <ProductButton>Crafts</ProductButton>
                </View>
                <View style={styles.buttonContainer}>
                    <ProductButton>Flowers</ProductButton>
                </View>

            </View>

            <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Preferred Payment:</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Cash</PaymentButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Card</PaymentButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PaymentButton>EBT</PaymentButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Mobile</PaymentButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PaymentButton>Checks</PaymentButton>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <OkButton title={'OK'} onPress={nextPageClick} />
                </View>

            </View>
        </View >

    );
}

export default UserPreferences;

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
    categoryText: {
        color: '#black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500'

    },
    textContainer: {
        marginTop: 20,
        marginHorizontal: 50,
        alignItems: 'center',
        marginBottom: 10
    },
    productsContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});