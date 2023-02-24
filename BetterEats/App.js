import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import MarketsScreen from './screens/MarketsScreen'
import UserPreferences from './screens/UserPreferences';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="UserPreferences" component={UserPreferences} options={styles.headerOptions} />
        <Stack.Screen name="MarketsScreen" component={MarketsScreen} options={styles.headerOptions} />

      </Stack.Navigator>

    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerOptions: {
    //headerShown: false
    headerTitle: null,
    headerTransparent: true,
    headerTitle: () => <Text style={{ fontSize: 0 }} />,
    headerBackTitleVisible: false,
    // backgroundColor: 'transparent',



  }
});
