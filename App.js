import React, { useState } from "react"
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, Image } from 'react-native';
import HomeScreen from "./source/screens/homeScreen"
import LoginScreen from "./source/screens/loginScreen"
import Register from './source/screens/registerScreen';
import FlexboxScreen from './source/screens/flexboxScreen';
import FlatlistScreen from './source/screens/FlatlistScreen';
import CustomListScreen from './source/screens/CustomListScreen';
import PositionScreen from './source/screens/PositionScreen';
import SurgaltScreen from './source/screens/SurgaltScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle: { fontSize: 22 },
        headerTitleAlign: "center"
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login"
          component={LoginScreen}
          initialParams={{ phone: 123, password: "zaaz" }}

          options={({ route }) => ({ title: route.params.garchig ? route.params.garchig : "nonono" })}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
        <Stack.Screen name="list" component={FlatlistScreen} />
        <Stack.Screen name="Customlist" component={CustomListScreen}
          options={{
            headerStyle: { backgroundColor: "#3498db", },
            headerTintColor: "white",
            headerTitleStyle: { fontSize: 26 },
            headerTitle: () => (<Image
              style={{ width: 100, height: 50 }}
              source={require("./assets/img/amazonPic.png")} />)

          }} />
        <Stack.Screen name="Position" component={PositionScreen} />
        <Stack.Screen name="Course" component={SurgaltScreen} />
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
