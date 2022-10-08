
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import HomeScreen from "./source/screens/homeScreen"
import LoginScreen from "./source/screens/loginScreen"
import Register from './source/screens/registerScreen';
import FlexboxScreen from './source/screens/flexboxScreen';
import FlatlistScreen from './source/screens/FlatlistScreen';
import CustomListScreen from './source/screens/CustomListScreen';
import PositionScreen from './source/screens/PositionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
        <Stack.Screen name="list" component={FlatlistScreen} />
        <Stack.Screen name="Customlist" component={CustomListScreen} />
        <Stack.Screen name="Position" component={PositionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myFont: { fontSize: 18, color: "green" },
  button: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "black",
    borderWidth: 1

  }
});
