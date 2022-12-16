import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import Tabs from "./Tabs"
import { ScrollBottomNavProvider } from "./context/ScrollBottomNavContext"
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen"
import LoginScreen from "./screens/LoginScreen/LoginScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <ScrollBottomNavProvider>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </ScrollBottomNavProvider>
    </NavigationContainer>
  )
}
