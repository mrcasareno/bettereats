import { Text, Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ProductButton from "../components/ProductButton";

function UserPreferences() {

    return (
        <View>
            <LinearGradient colors={['#54a86b','#dff7e5']}>
                <View style={styles.header}>
                    <Text style={styles.headerText} >bettereats</Text>
                </View>
            </LinearGradient>
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

            
        </View>

    );
}

export default UserPreferences;

const styles = StyleSheet.create({
    header: {
        padding: 16,
    },
    headerText: {
        color: 'black',
        fontSize: 50,
        textAlign: "center",
        marginTop: 30,
        fontWeight: '500'
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
        marginTop: 30,
        backgroundColor: '#eeeeee',
        borderRadius: 8,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});