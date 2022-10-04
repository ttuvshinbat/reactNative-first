
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import HomeScreen from "./source/screens/home"
import LoginScreen from "./source/screens/login"
import Register from './source/screens/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
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
